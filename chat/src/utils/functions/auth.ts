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
