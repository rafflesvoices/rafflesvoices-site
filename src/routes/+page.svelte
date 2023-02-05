<script lang="js">
	let typingText = true;
	import heading from '$lib/assets/img/heading.jpg';
	import Typewriter from 'svelte-typewriter'
	let previousTime = Date.now();
</script>

<img src="{heading}" alt="Raffles Voices Group" class="gradient-mask-b-0">

<div>
	<h1 class="text-6xl text-center pb-10 text-white font-mono">Raffles Voices</h1>
	<Typewriter mode='loop'>
		<p class="text-2xl text-center text-white font-mono">A choir of excellence</p>
		<p class="text-2xl text-center text-white font-mono">A choral community</p>
		<p class="text-2xl text-center text-white font-mono">Not a community choir</p>
	</Typewriter>
</div>
<div>
	<h2 class="text-4xl pt-32 text-center text-blue-500 font-mono">Who are we?</h2>
</div>
