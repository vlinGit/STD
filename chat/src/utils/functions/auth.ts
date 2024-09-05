/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-08-18 17:54:43
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-09-05 00:15:10
 * @FilePath: /std/chat/src/utils/functions/auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CryptoJS from "crypto-js";
interface Params {
	[key: string]: any;
}

export function generateVerifySign(params: {
	[key: string]: string | number | undefined;
}): string {
	const filteredParams = Object.entries(params)
		.filter(([key, value]) => key !== "verifySign" && value !== "")
		.sort(([keyA], [keyB]) => keyA.localeCompare(keyB)); // 2. 按字典顺序排序

	// 3. 构造排序后的查询字符串
	const queryString = filteredParams
		.map(([key, value]) => `${key}=${value}`)
		.join("&");

	console.log(import.meta.env.VITE_VERIFYSIGN_TOKEN);
	// 4. 在查询字符串末尾加上 &token
	const stringToSign = `${queryString}&${CryptoJS.MD5(
		import.meta.env.VITE_VERIFYSIGN_TOKEN || ""
	).toString(CryptoJS.enc.Hex)}`;

	console.log(stringToSign);

	// 5. 计算字符串的 MD5 值
	const md5Hash = CryptoJS.MD5(stringToSign).toString(CryptoJS.enc.Hex);

	console.log(md5Hash);

	return md5Hash;
}

// 生成随机的code_verifier
export function generateCodeVerifier(length = 128): string {
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
	let codeVerifier = "";
	for (let i = 0; i < length; i++) {
		codeVerifier += possible.charAt(
			Math.floor(Math.random() * possible.length)
		);
	}

	return codeVerifier;
}

export function generateCodeChallenge(codeVerifier: string): string {
	return base64URL(CryptoJS.SHA256(codeVerifier));
}

export function base64URL(str: string): string {
	return str
		.toString(CryptoJS.enc.Base64)
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
}

export function parseJwt(token: string): { header: any; payload: any } {
	const [header, payload, signature] = token.split(".");

	// 解码 Base64Url 编码的字符串
	const decodeBase64Url = (str: string) => {
		// 在 Base64Url 编码中，+ 和 / 需要替换为 + 和 /，且 = 需要去掉
		const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
		const decodedString = atob(base64);
		try {
			return JSON.parse(decodedString);
		} catch (e) {
			console.error("Error decoding JSON:", e);
			return null;
		}
	};

	// 解析 JWT 头部和载荷
	const decodedHeader = decodeBase64Url(header);
	const decodedPayload = decodeBase64Url(payload);

	return {
		header: decodedHeader,
		payload: decodedPayload,
	};
}
