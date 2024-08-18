/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-08-12 22:25:49
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-08-18 18:11:19
 * @FilePath: /std/chat/src/api/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ResData {
	success: boolean
	message: string
	data: any
}

export interface paymentParams {
	clientId: string
	amount: string
	settleCurrency: string
	currency: string
	vendor: string
	ipnUrl: string
	callbackUrl: string
	terminal: 'ONLINE'
	osType: ''
	reference: string
	description: string
	note: string
	timeout: '120'
	goodsInfo: string
	creditType: 'normal'
	paymentCount: ''
	frequency: ''
	cardNumber: ''
	customerNo: ''
	timestamp: string
	verifySign: string
}

export interface paymentRes {
	success: boolean
	message: string
	data: {
		result: {
			amount: string
			cashierUrl: string
			currency: string
			reference: string
			settleCurrency: string
			transactionNo: string
		}
		ret_code: string
		ret_msg: string
	}
}
