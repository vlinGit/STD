/*
 * @Author: WGinit wginit@yeah.net
 * @Date: 2024-08-12 22:25:49
 * @LastEditors: WGinit wginit@yeah.net
 * @LastEditTime: 2024-08-23 22:40:06
 * @FilePath: /std/chat/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import type { PluginOption } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

function setupPlugins (env: ImportMetaEnv): PluginOption[] {
	return [
		vue(),
		env.VITE_GLOB_APP_PWA === 'true' &&
			VitePWA({
				injectRegister: 'auto',
				manifest: {
					name: 'YI AI',
					short_name: 'YI AI',
					icons: [
						{ src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
						{ src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
					]
				}
			})
	]
}

export default defineConfig(env => {
	const viteEnv = loadEnv(env.mode, process.cwd()) as unknown as ImportMetaEnv

	return {
		baseUrl: './',
		minify: true,
		resolve: {
			alias: {
				'@': path.resolve(process.cwd(), 'src')
			}
		},
		plugins: setupPlugins(viteEnv),
		server: {
			host: '0.0.0.0',
			port: 1002,
			open: false,
			proxy: {
				'/api': {
					target: viteEnv.VITE_APP_API_BASE_URL,
					changeOrigin: true,
					rewrite: path => path.replace('/api/', '/api/')
				},
				'/oidc': {
					target: viteEnv.VITE_GLOB_API_HOST,
					changeOrigin: true,
					rewrite: path => path.replace('/oidc/', '/oidc/')
				},
				'/online': {
					target: viteEnv.VITE_PAT_HOST,
					changeOrigin: true,
					rewrite: path => path.replace('/online/', '/online/')
				}
			}
		},
		build: {
			reportCompressedSize: false,
			sourcemap: false,
			commonjsOptions: {
				ignoreTryCatch: false
			}
		}
	}
})
