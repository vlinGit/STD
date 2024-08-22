/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-08-18 17:54:43
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-08-23 01:26:02
 * @FilePath: /std/chat/src/utils/functions/auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CryptoJS from 'crypto-js'
export function generateVerifySign (
	params: { [key: string]: string | number | undefined },
	clientSecret: string
): string {
	// 1. 过滤掉空值字段和 verifySign 字段
	const filteredParams = Object.keys(params)
		.filter(
			key =>
				params[key] !== undefined && params[key] !== '' && key !== 'verifySign'
		)
		.reduce((acc, key) => {
			if (params[key] !== undefined) {
				// 再次确保值不为 undefined
				acc[key] = params[key] as string | number
			}
			return acc
		}, {} as { [key: string]: string | number })

	// 2. 按字典顺序排序
	const sortedKeys = Object.keys(filteredParams).sort()

	// 3. 构造签名字符串
	const signString = sortedKeys
		.map(key => `${key}=${filteredParams[key]}`)
		.join('&')

	// 4. 使用 HMAC-SHA256 进行签名
	const hash = CryptoJS.HmacSHA256(signString, clientSecret)
	const verifySign = hash.toString(CryptoJS.enc.Hex)

	return verifySign
}

// 生成随机的code_verifier
export function generateCodeVerifier (length: number = 128): string {
	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
	let codeVerifier = ''
	for (let i = 0; i < length; i++) {
		codeVerifier += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return codeVerifier
}

export function generateCodeChallenge (codeVerifier: string): string {
	return base64URL(CryptoJS.SHA256(codeVerifier))
}

export function base64URL (str: string): string {
	return str
		.toString(CryptoJS.enc.Base64)
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
}

export function parseJwt (token: string): { header: any; payload: any } {
	const [header, payload, signature] = token.split('.')

	// 解码 Base64Url 编码的字符串
	const decodeBase64Url = (str: string) => {
		// 在 Base64Url 编码中，+ 和 / 需要替换为 + 和 /，且 = 需要去掉
		const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
		const decodedString = atob(base64)
		try {
			return JSON.parse(decodedString)
		} catch (e) {
			console.error('Error decoding JSON:', e)
			return null
		}
	}

	// 解析 JWT 头部和载荷
	const decodedHeader = decodeBase64Url(header)
	const decodedPayload = decodeBase64Url(payload)

	return {
		header: decodedHeader,
		payload: decodedPayload
	}
}
