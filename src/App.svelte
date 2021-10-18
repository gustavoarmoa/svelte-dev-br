<script>
	export let name;
</script>

<main>
	<h1>Olá, mundo do <br> <strong>{name}</strong>!</h1>
	<p>Este é um projeto open source para traduzir ao português a documentação oficial do <strong><a href="https://svelte.dev">Svelte</a></strong> e trazer case de usos no mercado nacional.</p>
	<p>Se quiser contribuir pode encaminhar sua <strong>PR</strong> Link do <a href="https://github.com/gustavoarmoa/svelte-dev-br">repositório no Github</a></p>
	<p>Visite o <a href="https://svelte.dev/tutorial">Tutorial do Svelte</a> e aprenda como construir uma webapp em Svelte.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>