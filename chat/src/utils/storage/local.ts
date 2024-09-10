import { deCrypto, enCrypto } from '../crypto'

interface StorageData<T = any> {
	data: T
	expire: number | null
}

export function createLocalStorage (options?: {
	expire?: number | null
	crypto?: boolean
}) {
	const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

	const { expire, crypto } = Object.assign(
		{
			expire: DEFAULT_CACHE_TIME,
			crypto: true
		},
		options
	)

	function set<T = any> (key: string, data: T) {
		const storageData: StorageData<T> = {
			data,
			expire: expire !== null ? new Date().getTime() + expire * 1000 : null
		}

		const json = crypto ? enCrypto(storageData) : JSON.stringify(storageData)
		window.sessionStorage.setItem(key, json)
	}

	function get (key: string) {
		const json = window.sessionStorage.getItem(key)
		if (json) {
			let storageData: StorageData | null = null

			try {
				storageData = crypto ? deCrypto(json) : JSON.parse(json)
			} catch {
				// Prevent failure
			}

			if (storageData) {
				const { data, expire } = storageData
				if (expire === null || expire >= Date.now()) return data
			}

			remove(key)
			return null
		}
	}

	function remove (key: string) {
		window.sessionStorage.removeItem(key)
	}

	function clear () {
		window.sessionStorage.clear()
	}

	return {
		set,
		get,
		remove,
		clear
	}
}

export const ls = createLocalStorage()

export const ss = createLocalStorage({ expire: null, crypto: false })
