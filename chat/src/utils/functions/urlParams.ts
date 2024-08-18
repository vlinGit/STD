/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-08-18 17:08:04
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-08-18 17:09:55
 * @FilePath: /std/chat/src/utils/functions/urlParams.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function getUrlValue (param: string): string | null {
	const urlParams = new URLSearchParams(window.location.search)
	return urlParams.get(param)
}
