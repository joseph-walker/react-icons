import { useContext } from "react";

import type { IconName } from "./IconService";
import { IconContext } from "./IconProvider";

export function useIconProvider(iconName: IconName) {
	const iconContext = useContext(IconContext)
	iconContext?.heartbeat(iconName)
}
