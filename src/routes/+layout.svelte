<script>
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { children } = $props();
	import Header from '../component/Header.svelte';
</script>
<Header />
<ParaglideJS {i18n}>
{@render children()}
</ParaglideJS>

