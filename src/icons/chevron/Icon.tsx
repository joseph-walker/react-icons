import { useIconProvider } from "../../useIconProvider"

export function ChevronIcon() {
	useIconProvider('chevron')

	return (
		<svg viewBox="0 0 444.819 444.819">
			<use href="#chevron" />
		</svg>
	)
}
