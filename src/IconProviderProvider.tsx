import { useContext } from "react"

import { IconContext } from "./IconProvider"

export function IconProviderProvider() {
	const iconContext = useContext(IconContext)
	const icons = iconContext?.getRegisteredIcons()

	return (
		<>{icons && icons.map((Lazy, idx) => <Lazy key={idx} />)}</>
	)
}
