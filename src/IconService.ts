import { lazy } from "react"

const iconProviders = {
	"hamburger": lazy(() => import ("./icons/hamburger/Provider")),
	"chevron": lazy(() => import("./icons/chevron/Provider")),
} as const

export type IconName = keyof typeof iconProviders

type RegisterIconHandler = (nextIcons: ReturnType<IconService['getRegisteredIcons']>) => void

export class IconService {
	private resolved: boolean
	private listeners: RegisterIconHandler[]
	private registeredIcons: Set<IconName>

	constructor() {
		this.resolved = false
		this.registeredIcons = new Set()
		this.listeners = []
	}

	public heartbeat(iconName: IconName) {
		if (!this.registeredIcons.has(iconName)) {
			console.log(`Hearbeat from ${iconName}`)
			this.registerIcon(iconName)
		}
	}

	public registerIcon(icon: IconName) {
		this.registeredIcons.add(icon)

		for (const listener of this.listeners) {
			listener(this.getRegisteredIcons())
		}
	}

	public onRegisterIcon(callback: RegisterIconHandler) {
		this.listeners.push(callback)
	}

	public getRegisteredIcons() {
		if (!this.resolved) {
			const suspender = new Promise(resolve => {
				setTimeout(() => {
					this.resolved = true
					resolve(Array.from(this.registeredIcons).map(k => iconProviders[k]))
				}, 0)
			})

			throw suspender
		} else {
			return Array.from(this.registeredIcons).map(k => iconProviders[k])
		}
	}
}

export const iconService = new IconService()
