import { defineStore } from 'pinia'
import { useChatStore } from '../chat'

import type { AuthState, GlobalConfig, UserBalance } from './helper'
import {
	getToken,
	removeToken,
	setToken,
	setIdToken,
	getIdToken,
	removeIdToken
} from './helper'
import { store } from '@/store'
import {
	fetchGetInfo,
	fetchLoginAPI,
	fetchRegisterAPI,
	fetchTokenAPI
} from '@/api'
import { fetchQueryConfigAPI } from '@/api/config'
import { fetchGetBalanceQueryAPI } from '@/api/balance'
import type { ResData } from '@/api/types'
import { getUrlValue } from '@/utils/functions/urlParams'
import {
	generateCodeChallenge,
	generateCodeVerifier,
	parseJwt
} from '@/utils/functions/auth'

export const useAuthStore = defineStore('auth-store', {
	state: (): AuthState => ({
		token: getToken(),
		loginDialog: false,
		globalConfigLoading: true,
		userInfo: {},
		userBalance: {},
		globalConfig: {} as GlobalConfig,
		loadInit: false
	}),

	getters: {
		isLogin: (state: AuthState) => !!state.token
	},

	actions: {
		async getUserInfo (): Promise<T> {
			try {
				if (!this.loadInit) await this.getglobalConfig()

				const res = await fetchGetInfo()
				if (!res) return Promise.resolve(res)
				const { data } = res
				const { userInfo, userBalance } = data
				this.userInfo = { ...userInfo }
				this.userBalance = { ...userBalance }
				return Promise.resolve(data)
			} catch (error) {
				return Promise.reject(error)
			}
		},

		updateUserBanance (userBalance: UserBalance) {
			this.userBalance = userBalance
		},

		async getUserBalance () {
			const res: ResData = await fetchGetBalanceQueryAPI()
			const { success, data } = res
			if (success) this.userBalance = data
		},

		async getglobalConfig (domain = '') {
			const res = await fetchQueryConfigAPI({ domain })
			this.globalConfig = res.data
			this.globalConfigLoading = false
			this.loadInit = true
		},

		login () {
			const loginCode = getUrlValue('code')
			if (!loginCode) {
				// 跳转授权登录
				const codeVerifier = generateCodeVerifier()
				const codeChallenge = generateCodeChallenge(codeVerifier)
				localStorage.setItem('codeVerifier', codeVerifier)
				localStorage.setItem('codeChallenge', codeChallenge)

				const {
					VITE_AUTH_URL,
					VITE_AUTH_CLIENT_ID,
					VITE_AUTH_REDIRECT_URI,
					VITE_AUTH_CODE_CHALLENGE_METHOD,
					VITE_AUTH_STATE
				} = import.meta.env
				const loginUri = `${VITE_AUTH_URL}?client_id=${VITE_AUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(
					VITE_AUTH_REDIRECT_URI
				)}&code_challenge=${codeChallenge}&code_challenge_method=${VITE_AUTH_CODE_CHALLENGE_METHOD}&prompt=Welcome+back%21&response_type=code&scope=openid+profile&state=${VITE_AUTH_STATE}`
				window.location.replace(loginUri)
			} else {
				// 直接登录
				// this.setToken(loginCode)
			}
		},

		async fetchLogin (params, registerParams) {
			const res = await fetchLoginAPI(params).catch(async err => {
				if (err.code === 403) {
					console.log('new user')
					await this.register(registerParams)
					this.fetchLogin(params, registerParams)
				}
			})
			if (res.data) this.setToken(res.data)
		},

		async code2token (code) {
			const {
				VITE_AUTH_CLIENT_ID,
				VITE_AUTH_REDIRECT_URI,
				VITE_AUTH_CODE_CHALLENGE_METHOD
			} = import.meta.env
			const codeVerifier = localStorage.getItem('codeVerifier')
			const codeChallenge = localStorage.getItem('codeChallenge')
			const params = {
				grant_type: 'authorization_code',
				code,
				redirect_uri: VITE_AUTH_REDIRECT_URI,
				client_id: VITE_AUTH_CLIENT_ID,
				code_verifier: codeVerifier,
				code_challenge: codeChallenge,
				code_challenge_method: VITE_AUTH_CODE_CHALLENGE_METHOD
			}
			let idToken = getIdToken()
			if (!idToken) {
				const res = await fetchTokenAPI(params)
				console.log('res==', res)
				const data = res.data || {}
				idToken = data.id_token
				setIdToken(idToken)
			}
			if (idToken) {
				// this.setToken(res.id_token)
				const { payload } = parseJwt(idToken)
				console.log(payload)
				const username = payload.given_name + payload.family_name
				const password = payload.sub
				this.fetchLogin(
					{
						username,
						password
					},
					{
						username,
						password,
						email: payload.email
					}
				)
			}
		},
		async register (params) {
			const res = await fetchRegisterAPI(params)
			this.setToken(res.data)
			this.getUserInfo()
		},

		setToken (token: string) {
			this.token = token
			removeIdToken() // 清除临时授权的token
			setToken(token)
		},

		removeToken () {
			this.token = undefined
			removeToken()
		},

		setLoginDialog (bool: boolean) {
			console.log('to login')
			// this.loginDialog = bool
			if (bool) {
				// 去登录
				this.login()
				// this.loginWithOIDC()
			}
		},

		logOut () {
			this.token = undefined
			removeToken()
			this.userInfo = {}
			this.userBalance = {}
			window.$message.success('登出账户成功！')
			const chatStore = useChatStore()
			chatStore.clearChat()
		},

		updatePasswordSuccess () {
			this.token = undefined
			removeToken()
			this.userInfo = {}
			this.userBalance = {}
			// this.loginDialog = true
		}
	}
})

export function useAuthStoreWithout () {
	return useAuthStore(store)
}
