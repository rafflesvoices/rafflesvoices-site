<script lang="js">
	import heading from '$lib/assets/img/header.webp';
	import { unfiltered_posts } from './posts/blog-list';
</script>

<svelte:head>
    <title>Raffles Voices | Home</title>
</svelte:head>

<div class="">
	<img src="{heading}" alt="Raffles Voices Group" class="gradient-mask-b-0">
</div>

<div>
	<h1 class="text-4xl md:text-9xl pb-5 pl-14 text-white font-pt-serif font-bold" id="title">Our <span class="text-rv-special">Blog</span></h1>
</div>
{#each unfiltered_posts as post }
	<div class="flex items-center justify-center h-32">
		<div class="border border-blue-400 div-separator"></div>
	</div>
	<div>
		<a href={post.url}><h1 class="text-4xl md:text-7xl pb-5 pl-14 text-white font-pt-serif font-bold" id={post.title}>{post.title}</h1></a>
		<p class="text-xl md:text-2xl pb-3 pl-14 text-blue-400 font-canela-serif italic">{post.day}/{post.month}/{post.year}</p>
		<p class="text-xl md:text-2xl pb-5 pl-14 text-white font-canela-serif">{post.description}</p>
	</div>
{/each}

<style>
	.div-separator {
		width: calc(100% - 7rem);
	}
</style>