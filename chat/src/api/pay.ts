/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-09-04 23:30:20
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-09-04 23:31:27
 * @FilePath: /std/chat/src/api/pay.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { post } from "@/utils/request";

export function fetchVerifySignAPI<T>(data): Promise<T> {
	return post<T>({
		url: "/pay/verifySign",
		data,
	});
}
