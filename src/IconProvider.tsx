import { Suspense, createContext } from "react";
import { IconProviderProvider } from "./IconProviderProvider";

import type { IconService } from "./IconService";

export const IconContext = createContext<IconService | undefined>(undefined)

export function IconProvider() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
			<defs>
				<Suspense fallback={false}>
					<IconProviderProvider />
				</Suspense>
			</defs>
		</svg>
	)
}
