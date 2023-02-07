<script lang="js">
	import heading from '$lib/assets/img/header.webp';
	import Typewriter from 'svelte-typewriter'
	import { achievements } from './achievements';
</script>

<svelte:head>
    <title>Raffles Voices | Home</title>
</svelte:head>

<svelte:window on:scroll={() => {
	let opacity = 0.75;
	const destination = 400;
	const start = 300;
	window.addEventListener("scroll", () => {
		const currentScroll = window.scrollY;
		if((currentScroll - start)/destination > 0.75) {
			opacity = (currentScroll - start)/destination;
			console.log(opacity)
			console.log(currentScroll - start)
		} else {
			opacity = 0.75;
		}
		document.querySelector(".navbar").style.opacity = opacity;
	});

}}/>

<div class="">
	<img src="{heading}" alt="Raffles Voices Group" class="gradient-mask-b-0">
</div>

<div>
	<h1 class="text-4xl md:text-9xl pb-5 pl-14 text-white font-pt-serif font-bold" id="title">Raffles <span class="text-rv-special">Voices</span></h1>
	<Typewriter mode='loop'>
		<p class="text-2xl md:text-3xl pl-14 text-white font-pt-serif font-bold">A choir of excellence</p>
		<p class="text-2xl md:text-3xl pl-14 text-white font-pt-serif font-bold">A choral community</p>
		<p class="text-2xl md:text-3xl pl-14 text-white font-pt-serif font-bold">Not a community choir</p>
	</Typewriter>
</div>
<div class="w-11/12">
	<h2 class="text-3xl md:text-5xl pt-10 md:pt-24 pb-4 pl-14 text-blue-400 font-canela-serif italic" id="about">Who are we?</h2>
	<p class="text-xl md:text-2xl pl-14 text-white font-canela-serif">Raffles Voices, the choir of Raffles Institution, was founded in 1992 by Ms Charmaine Chiang.  Under the directorship of award-winning conductor Mr. Toh Ban Sheng since 2003, it has grown into a renowned SATB boys choir, garnering numerous top accolades in Europe and tackling a myriad of musical genres from classical works to modern commissions.</p>
	<p class="text-xl md:text-2xl pl-14 pt-5 text-white font-canela-serif">Raffles Voices is active in the choral arena, participating in a wide range of choral competitions from the Singapore Youth Festival (SYF) Central Judging to international choral festivals. Besides consistently achieving Gold (with Honours) and Distinction Certificate in SYF, Raffles Voices has established itself as one of the foremost choirs in Singapore since clinching its first Gold in Germany in 2006.  Perhaps the most awarded secondary school choir, at the heel of winning two Gold Awards in Vienna, a Category Champion and the Conductor's Prize in 2010, it was ranked 11th of the top 50 children's choirs by Interkultur World Ranking.</p>
	<p class="text-xl md:text-2xl pl-14 pt-5 text-white font-canela-serif">At home, Raffles Voices has performed numerous times at the Esplanade Concert Hall under the Limelight Series.   Apart from our rehearsals, Raffles Voices also organizes various camps and exchanges with local and international choirs. To allow each singer to further his or her exploration in music, there are various small group student bodies under our choir, where singers showcase their talents in song writing, composition and also discover varied genres of music.</p>
	<p class="text-xl md:text-2xl pl-14 pt-5 text-white font-canela-serif">To date, Raffles Voices has toured the Austria, Australia, Czech Republic, Finland, Germany, Hawaii,  Japan, Korea, Lithuania, Netherlands, Poland, Slovakia and Spain.  In the many years to come, Raffles Voices continually bond in camps, perform on world stages, and develop each member holistically while furthering their achievements both in Singapore and beyond. We invite all interested students to join our family of singers!</p>
</div>
<div class="w-11/12">
	<h2 class="text-3xl md:text-5xl pt-10 md:pt-24 pb-4 pl-14 text-blue-400 font-canela-serif italic">Our Past Achievements</h2>
	{#each achievements as achieve}
		<p class="text-xl md:text-2xl pl-14 pt-5 text-white font-canela-serif">{achieve.year} - {achieve.description}</p>
	{/each}
</div>
<div class="w-11/12">
	<h2 class="text-3xl md:text-5xl pt-10 md:pt-24 pb-4 pl-14 text-blue-400 font-canela-serif italic">Why Should You Join Us?</h2>
</div>
<div class="w-11/12">
	<h2 class="text-3xl md:text-5xl pt-10 md:pt-24 pb-4 pl-14 text-blue-400 font-canela-serif italic">Our CCA Hours</h2>
</div>