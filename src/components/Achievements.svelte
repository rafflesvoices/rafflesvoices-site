<script>
	import { achievements } from "../pages/achievements";
</script>

{#each achievements as achieve}
	<p class="">{achieve.year} - {achieve.description}</p>
{/each}