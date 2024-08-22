/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-08-12 22:25:49
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-08-22 00:04:31
 * @FilePath: /std/chat/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'

export const store = createPinia()

export function setupStore (app: App) {
	app.use(store)
}

export * from './modules'
