import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte dev br'
	}
});

export default app;