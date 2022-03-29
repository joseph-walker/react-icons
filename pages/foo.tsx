import { IconContext, IconProvider } from "../src/IconProvider";
import { IconService } from "../src/IconService";

export default function Foo() {
	return (
		<IconContext.Provider value={new IconService()}>
			<IconProvider />
			<h1>No icons load on this page</h1>
		</IconContext.Provider>
	)
}
