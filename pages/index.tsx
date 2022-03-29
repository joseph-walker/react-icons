import { Suspense, lazy, useState, useEffect } from "react";
import { IconContext, IconProvider } from "../src/IconProvider";
import { HamburgerIcon } from "../src/icons/hamburger/Icon";
import { IconService } from "../src/IconService";

const ExampleComponent = lazy(() => import("../src/ExampleComponent"))

export default function Home() {
	const [showExample, setShowExample] = useState(false)

	useEffect(function () {
		setTimeout(function () {
			setShowExample(true)
		}, 2500)
	}, [])

	return (
		<IconContext.Provider value={new IconService()}>
			<IconProvider />
			<h1>Let&apos;s load some icons</h1>
			<h2>Three icons, one source</h2>
			<div style={{ width: "32px" }}>
				<HamburgerIcon />
				<HamburgerIcon />
				<div style={{ fill: "#008cba" }}>
					<HamburgerIcon />
				</div>
			</div>
			<h1>And one async</h1>
			<h2>Notice it&apos;s split automatically in the network tab</h2>
			<Suspense fallback={<p>Loading...</p>}>
				{showExample && <ExampleComponent />}
			</Suspense>
		</IconContext.Provider>
	)
}
