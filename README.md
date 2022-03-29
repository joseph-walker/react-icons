# React Icons POC

A novel approach to icons in React (and Next, I suppose; though it's not technically a requirement)

### Breakdown

An SVG icon is broken down into 2 parts - the icon provider (the SVG markup), and the icon itself (with the SVG root element + viewbox)
In the icon, its content is replaced with an SVG `<use>` block.

Inside of the icon component, we put a `useIconProvider` hook with a unique identifier that is tied to a provider via a config map in the `IconService`.

The `IconProvider` talks to that `IconService` in the request context and will get a list of all the icons in the request tree that have sent a hearbeat (i.e. they're used). It will then lazy-load all of them using React's native `lazy` helper.

The secret sauce is in the `IconService`. React trees render top-down, so the first time the Provider renders, it will be before any Icons cand send their heartbeat; before they can tell the provider they'll be used. So the `IconService` suspends with a zero-second timeout, effectively scheduling a microtask to run after the current work cycle of the React renderer. Because of the streaming functionality in React 18, this post-render update to the provider can send a fast-follow update to the root SVG component so that icons in the tree using `<use>` blocks will have content in the SSR'd content and will effectively work without any JS / hydration / client lazy loading.
