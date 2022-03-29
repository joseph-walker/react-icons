import { useIconProvider } from "../../useIconProvider"

export function HamburgerIcon() {
	useIconProvider('hamburger')

	return (
		<svg viewBox="0 0 438.533 438.533">
			<use href="#hamburger" />
		</svg>
	)
}
