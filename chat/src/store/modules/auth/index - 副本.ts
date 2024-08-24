import { defineStore } from 'pinia'
import { useChatStore } from '../chat'
import axios from 'axios'
import CryptoJS from 'crypto-js'
import { generateVerifySign } from '@/utils/functions/auth'
import { fetchOrderBuyAPI, fetchOrderQueryAPI } from '@/api/order'
import type { paymentRes } from '@/api/types'

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
		async getUserInfo(): Promise<T> {
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

		updateUserBanance(userBalance: UserBalance) {
			this.userBalance = userBalance
		},

		async getUserBalance() {
			const res: ResData = await fetchGetBalanceQueryAPI()
			const { success, data } = res
			if (success) this.userBalance = data
		},

		async getglobalConfig(domain = '') {
			const res = await fetchQueryConfigAPI({ domain })
			this.globalConfig = res.data
			this.globalConfigLoading = false
			this.loadInit = true
		},

		login() {
			this.mockPayment()
			// const loginCode = getUrlValue('code')
			// if (!loginCode) {
			// 	// 跳转授权登录
			// 	const codeVerifier = this.generateRandomString(64)
			// 	const codeChallenge = this.generateCodeChallenge(codeVerifier)
			// 	const {
			// 		VITE_AUTH_URL,
			// 		VITE_AUTH_CLIENT_ID,
			// 		VITE_AUTH_REDIRECT_URI,
			// 		VITE_AUTH_CODE_CHALLENGE_METHOD,
			// 		VITE_AUTH_STATE
			// 	} = import.meta.env

			// 	const loginUri = `${VITE_AUTH_URL}?client_id=${VITE_AUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(
			// 		VITE_AUTH_REDIRECT_URI
			// 	)}&code_challenge=${codeChallenge}&code_challenge_method=${VITE_AUTH_CODE_CHALLENGE_METHOD}&prompt=Welcome+back%21&response_type=code&scope=openid+profile&state=${VITE_AUTH_STATE}`
			// 	window.location.replace(loginUri)
			// } else {
			// 	// 直接登录
			// 	// this.setToken(loginCode)
			// 	this.accessToken(loginCode)
			// }
		},

		async register() {
			const res = await fetchRegisterAPI({
				username: '',
				password: '',
				email: 'abc@qq.com'
			})
			this.setToken(res.data)
			this.getUserInfo()
		},

		setToken(token: string) {
			this.token = token
			setToken(token)
		},

		accessToken(code: string) {
			const {
				VITE_OAUTH_TOKEN,
				VITE_AUTH_CLIENT_ID,
				VITE_AUTH_CLIENT_SECRET,
				VITE_AUTH_CODE_CHALLENGE_METHOD,
				VITE_AUTH_REDIRECT_URI
			} = import.meta.env
			const accessTokenUri = `${VITE_OAUTH_TOKEN}?client_id=${VITE_AUTH_CLIENT_ID}
			&client_secret=${VITE_AUTH_CLIENT_SECRET}&grant_type=authorization_code&code=${code}
			&code_verifier=${useAuthStore().codeVerifier}&code_challenge=${useAuthStore().codeChallenge}
			&code_challenge_method=${VITE_AUTH_CODE_CHALLENGE_METHOD}
			&redirect_uri=${encodeURIComponent(
				VITE_AUTH_REDIRECT_URI
			)}`
			// window.location.replace(accessTokenUri)
			console.log("----------------accessTokenUri:" + accessTokenUri);

			try {
				axios.get(accessTokenUri)
					.then(response => {
						const token = response.data.id_token
						this.setToken(token)
						console.log("----------------token:" + token);
					})
			} catch (error) {
				console.log("----------------error:" + error);
			}

		},

		removeToken() {
			this.token = undefined
			removeToken()
		},

		setLoginDialog(bool: boolean) {
			// this.loginDialog = bool
			if (bool) {
				// 去登录
				this.login()
			}
		},

		logOut() {
			this.token = undefined
			removeToken()
			this.userInfo = {}
			this.userBalance = {}
			window.$message.success('登出账户成功！')
			const chatStore = useChatStore()
			chatStore.clearChat()
		},

		updatePasswordSuccess() {
			this.token = undefined
			removeToken()
			this.userInfo = {}
			this.userBalance = {}
			// this.loginDialog = true
		},

		cryptS256(input: string) {
			// 字符串字面量"CryptoJS.enc.Hex"指定了输出的加密方式为十六进制字符串
			return CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(input));
		},

		/**
		 * 生成随机字符串
		 * @param length 随机字符串的长度
		 * @returns 随机字符串
		 */
		generateRandomString(length: number) {
			let text = ''
			const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
			for (let i = 0; i < length; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length))
			}
			return text
		},

		/**
		 * 生成 Code Challenge
		 * @param code_verifier 上边生成的 CodeVerifier
		 * @returns Code Challenge
		 */
		generateCodeChallenge(code_verifier: string) {
			return this.base64URL(CryptoJS.SHA256(code_verifier))
		},
		/**
		 * 将字符串base64加密后在转为url string
		 * @param str 字符串
		 * @returns bese64转码后转为url string
		 */
		base64URL(str: CryptoJS.lib.WordArray) {
			return str
				.toString(CryptoJS.enc.Base64)
				.replace(/=/g, '')
				.replace(/\+/g, '-')
				.replace(/\//g, '_')
		},

		async mockPayment() {
			try {
				// const res: ResData = await fetchOrderBuyAPI({ goodsId: orderInfo.value.pkgInfo.id, payType: qsPayType })
				const now = new Date();
				const utcTime = now.toUTCString();
				const { VITE_GLOB_API_URL, VITE_AUTH_CLIENT_ID, VITE_AUTH_CLIENT_SECRET } = import.meta.env
				const params: { [key: string]: string } = {
					amount: '1',
					settleCurrency: 'USD',
					currency: 'USD',
					vendor: "alipay",
					ipnUrl: `${VITE_GLOB_API_URL}/ipnUrl`,
					callbackUrl: `${VITE_GLOB_API_URL}/payback?status={status}&transactionNo={transactionNo}`,
					terminal: 'ONLINE',
					osType: '',
					reference: `test1723420752040`,
					description: 'test',
					note: 'test-note',
					timeout: '120',
					goodsInfo: "[{\"goods_name\":\"name1\",\"quantity\":\"quantity1\"}]",
					creditType: 'normal',
					paymentCount: '',
					frequency: '',
					cardNumber: '',
					customerNo: '',
					timestamp: utcTime, //UTC时间
					merchantNo: '200043',
					storeNo: '304076',
					verifySign: '',
				}

				const verifySign = this.generateVerifySign(params)
				console.log("--------------------verifySign:" + verifySign)
				// const verifySign = generateVerifySign(params, VITE_AUTH_CLIENT_SECRET)
				params.verifySign = verifySign
				console.log("--------------------params:" + JSON.stringify(params))


				// const res: paymentRes = await fetchOrderBuyAPI(params)
				// const { data, success, message } = res
				// console.log("--------------------data:" + data)
				// console.log("--------------------success:" + success)
				// console.log("--------------------message:" + message)
				// if (!success)
				// 	// return ms.error(message)
				console.log("--------------------payment1 fail!!!!")

			}
			catch (error) {
				console.log("--------------------payment2 fail!!!!")
			}
		},

		generateVerifySign(json: { [key: string]: string }) {
			// 获取排序后的keys
			const sortedKeys = Object.keys(json).sort();
			var paramString: string = ""

			sortedKeys.forEach(key => {
				const value = json[key]
				if (value.length > 0) {
					paramString += "&" + key + "=" + value
				}
			});
			paramString += "&token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIxODNhNTYwYjY2MTc1MGUxOWM5NjcyMmU1MjU2ZTk5IiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL21pbmktZGVtby5saXVkYWZhbmcuY29tL29pZGMvIiwic3ViIjoic3hMMU14cUFaeDAiLCJhdWQiOlsiQjY2NDE1RkUtNEE1OS00QTQwLTk1MkYtRUU0NUMyNzdBMDk2Il0sImV4cCI6MTcyNDMyNTI4NiwiaWF0IjoxNzI0MzIzNDg2LCJhbXIiOlsicHdkIl0sImF6cCI6IkI2NjQxNUZFLTRBNTktNEE0MC05NTJGLUVFNDVDMjc3QTA5NiIsImNsaWVudF9pZCI6IkI2NjQxNUZFLTRBNTktNEE0MC05NTJGLUVFNDVDMjc3QTA5NiIsImF0X2hhc2giOiJtUHNPOWE3amxIRmQ3MnhiM3l2MklRIiwiY19oYXNoIjoiSTNfV1JlSHRfdFFFb0QxSGYwQzdwZyIsIm5hbWUiOiJra2trIiwiZ2l2ZW5fbmFtZSI6Imtra2siLCJmYW1pbHlfbmFtZSI6ImtsIiwiZW1haWwiOiIxNTY0MDMzNDAzQHFxLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfQ.KFlhgcESjoWcRsvseI0pESQEeq8vgUNgjOIPkAilqN-ff5puH8hUFsvnxkfsX7rY8jppCN1_bfTkx3Zk6dPTzC_3ixbYgc-uFJczZCch5dJ9n1xXFbxdUI4C5V4y16SGEcS8v3ITPdWYUrtklN9yR-RW0xBWgJ-pG6A5O34xuhrXh7PI5jMNsAUqKmzbExDHVLSTKnN2e9KEUn4yfRFBONyFYTuOHLU73Y-I8uUSGk34L9m-oEw3l3Cums_NFJRpq5HCNhDe9pOw92Y3oMINlp2ki1t-GLJ7MHr9hSFEIBZCW_BkT9Ogj6zsPxWouS2is4y2FCptGtqd19095H-zcQ"
			//去掉第一个'&'字符
			paramString = paramString.substring(1, paramString.length)
			console.log("--------------------paramString:" + paramString)
			//字符串转化成utf8字字符，再进行md5加密
			const hash = CryptoJS.MD5(CryptoJS.enc.Utf8.parse(paramString))

			return hash.toString()
		}
	}
})

export function useAuthStoreWithout() {
	return useAuthStore(store)
}
