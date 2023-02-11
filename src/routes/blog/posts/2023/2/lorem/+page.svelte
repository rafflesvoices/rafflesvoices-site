<script>
	import { Highlight } from "svelte-highlight";
	import atomOneDark from "svelte-highlight/styles/atom-one-dark";
	import rust from "svelte-highlight/languages/rust";
	let code = "fn main() {\n\tprintln!(\"HI\");\n}"
</script>

<svelte:head>
    <title>Raffles Voices | Blog - Lorem Ipsium</title>
	{@html atomOneDark}
</svelte:head>

<h1 class="text-4xl md:text-9xl pb-3 pl-14 pt-16 text-white font-pt-serif font-bold">Lorem Ipsium</h1>
<p class="text-xl md:text-2xl pl-14 pb-5 text-blue-400 font-canela-serif">10/2/2023</p>
<div class="w-11/12">
	<p class="text-xl md:text-2xl pl-14 pb-5 text-white font-canela-serif">
		Error eius in praesentium nisi distinctio minus ex assumenda. Aspernatur hic adipisci iusto eius dicta beatae. Nobis quos quod doloribus culpa odio ad praesentium magni. Possimus similique repellendus neque quibusdam explicabo dolor aliquam eaque. Quo et voluptates iste quam vero natus voluptate ad. Officia esse distinctio vero tempore neque id. Ea omnis soluta molestias ducimus suscipit deserunt quas. Magnam aut consequatur iusto distinctio blanditiis debitis illum eligendi. Saepe tempore nisi aut. Dolore aliquid numquam saepe saepe nostrum necessitatibus sapiente optio occaecati. Nobis dolor qui. At praesentium impedit laudantium. Molestiae quis quas. Animi adipisci est tempora recusandae sequi aliquam minima. Ducimus a itaque cumque consectetur. Omnis eius iusto. Consequatur quos ex. Fugiat amet quasi distinctio sequi atque minima quibusdam aut. Voluptatem quidem cum at rerum cupiditate omnis veritatis facilis. Reprehenderit unde temporibus. Eum aliquam quos voluptatum enim iusto quos. Fugiat fugiat mollitia labore ipsum. Accusamus distinctio laudantium voluptatibus accusantium tempora. Debitis iusto cupiditate possimus voluptas rerum asperiores similique adipisci nam. Modi voluptatibus tempore atque reiciendis rerum nihil a fugiat. Placeat dolor dicta quis quo qui nostrum laboriosam quasi rerum. Quaerat incidunt similique. Rem saepe similique totam. Ad sed molestiae sit maiores nihil. Facilis deleniti cupiditate non quisquam officiis fugit illo voluptates. Sequi reprehenderit exercitationem impedit magnam expedita quasi veniam explicabo fugiat. Occaecati corporis quos deleniti. Impedit quas velit magni animi. Assumenda esse cupiditate inventore consequatur autem illum beatae occaecati eius. Sapiente perspiciatis sequi numquam aspernatur suscipit debitis fuga nisi. Vitae illum quibusdam maiores laborum officia temporibus. Voluptate debitis quidem voluptas eligendi similique minima maxime numquam saepe. Natus quis ipsum occaecati quis voluptate fugiat similique assumenda. Nemo nobis officiis animi esse maiores molestiae minima pariatur iste. Ipsum eos veritatis nulla. Corrupti repellendus illo. Earum deserunt quo. Deserunt soluta omnis officia. Soluta hic dignissimos voluptatum iusto itaque. Modi soluta non aperiam nobis nobis cum aliquam saepe. Quisquam repellat dolore consequatur qui. Dolores nostrum doloribus facilis voluptatum dicta. Fugit maxime molestias magnam nam quaerat non fugit.
	</p>
	<div class="pl-14">
		<Highlight language={rust} code={code} />
	</div>
</div>