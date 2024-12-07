<script>
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { children } = $props();
	import Nav from '../component/Nav.svelte'; 
	export let content;
</script>
<Nav />
<main class="form-signin">
    {@render content}
</main>

<ParaglideJS {i18n}>
{@render children()}
</ParaglideJS>

