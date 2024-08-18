/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-08-12 22:25:49
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-08-18 18:11:42
 * @FilePath: /std/chat/src/api/order.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { get, post } from '@/utils/request'
import { paymentParams } from './types'

/* order buy */
// export function fetchOrderBuyAPI<T>(data: { goodsId: number; payType?: string }): Promise<T> {
//   return post<T>({
//     url: '/order/buy',
//     data,
//   })
// }

export function fetchOrderBuyAPI<T> (data: paymentParams): Promise<T> {
	return post<T>({
		url: '/v1/ex/payment',
		data
	})
}

/* order query */
export function fetchOrderQueryAPI<T> (data: { orderId: string }): Promise<T> {
	return get<T>({
		url: '/order/queryByOrderId',
		data
	})
}
