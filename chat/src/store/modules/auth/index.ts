import { defineStore } from 'pinia'
import { useChatStore } from '../chat'

import type { AuthState, GlobalConfig, UserBalance } from './helper'
import { getToken, removeToken, setToken } from './helper'
import { store } from '@/store'
import { fetchGetInfo, fetchRegisterAPI } from '@/api'
import { fetchQueryConfigAPI } from '@/api/config'
import { fetchGetBalanceQueryAPI } from '@/api/balance'
import type { ResData } from '@/api/types'
import { getUrlValue } from '@/utils/functions/urlParams'

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
				const {
					VITE_AUTH_URL,
					VITE_AUTH_CLIENT_ID,
					VITE_AUTH_REDIRECT_URI,
					VITE_AUTH_CODE_CHALLENGE,
					VITE_AUTH_CODE_CHALLENGE_METHOD,
					VITE_AUTH_STATE
				} = import.meta.env
				const loginUri = `${VITE_AUTH_URL}?client_id=${VITE_AUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(
					VITE_AUTH_REDIRECT_URI
				)}&code_challenge=${VITE_AUTH_CODE_CHALLENGE}&code_challenge_method=${VITE_AUTH_CODE_CHALLENGE_METHOD}&prompt=Welcome+back%21&response_type=code&scope=openid+profile&state=${VITE_AUTH_STATE}`
				window.location.replace(loginUri)
			} else {
				// 直接登录
				this.setToken(loginCode)
			}
		},

		async register () {
			const res = await fetchRegisterAPI({
				username: '',
				password: '',
				email: 'abc@qq.com'
			})
			this.setToken(res.data)
			this.getUserInfo()
		},

		setToken (token: string) {
			this.token = token
			setToken(token)
		},

		removeToken () {
			this.token = undefined
			removeToken()
		},

		setLoginDialog (bool: boolean) {
			// this.loginDialog = bool
			if (bool) {
				// 去登录
				this.login()
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
