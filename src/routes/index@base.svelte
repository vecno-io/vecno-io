<script lang="ts">
	import lodash from 'lodash';
	const { debounce } = lodash;

	import { browser } from '$app/env';
	import { onDestroy, onMount } from 'svelte';

	import CardBack from '$lib/parts/card-back.svelte';
	import CardFront from '$lib/parts/card-front.svelte';

	import { swapStepper } from '$lib/utility/swap-transitions';

	const loaderSteps = 6;

	const loader = swapStepper(loaderSteps);
	const load = loader.state;

	let timeout: string | number | NodeJS.Timeout | null | undefined = null;
	const stepLoader = () => {
		if ($load < loaderSteps) {
			loader.setTo($load + 1);
			timeout = setTimeout(stepLoader, 160 * $load);
		}
	};

	let show = false;
	let fliped = false;
	let current = 0;

	let active = false;
	let cardBack: HTMLDivElement | null = null;
	let cardFront: HTMLDivElement | null = null;

	export let guild: { name: string; tag: string; info: string; description: string } | null = null;
	let guildData = [
		{
			name: 'The Core',
			tag: 'The old world, all that remains after eons of raw consumption.',
			info: 'Dreams have left us, and no one remembers if this happened before or after the last visible stars faded out of sight.',
			description:
				'In the old world, all the remains are failing systems at the center of visible space. It is the world we live in, the one we need to escape before it rips itself apart and nothing remains. It is a cold dark place where time no longer matters as change has become a thing of the past.'
		},
		{
			name: 'The Extend',
			tag: 'A new world, a place beyond darkness, the darkness that traps all light and matter.',
			info: 'Information escaping the darkness is little and slow. But what came back so far has sparked dreams and visions of stars again.',
			description:
				'In the new world, life is flourishing, growing, and expanding. It is what the old place used to be billions of stars being created and destroyed in a cycle of life. It is our future, our hope for survival, just a bit more of this endless time before explorers and engineers sign off of protocols and procedures to get us there.'
		},
		{
			name: 'The Unknown',
			tag: 'A place where chaos rules until the dust settle and natural patterns form. ',
			info: 'It just takes a few brave souls to explore, define and map those places so that others can follow.',
			description:
				'As in the old days, when people described the center of the center as a singularity and nothing more. There are still places where the rules break or simply change to the point that our comprehension no longer flows. Those we call the unknown.'
		}
	];
	onMount(() => {
		if (!browser) return;
		if (!cardBack) return;
		if (!cardFront) return;
		timeout = setTimeout(stepLoader, 1000);
		cardBack.addEventListener('transitionend', () => {
			active = false;
		});
		cardFront.addEventListener('transitionend', () => {
			active = false;
		});
	});
	onDestroy(() => {
		if (timeout) {
			clearTimeout(timeout);
		}
	});

	const onClick = (val: number) => {
		if (fliped) return;
		if (!guild) return;
		fliped = !fliped;
		active = true;
	};
	const onChange = debounce((val: number) => {
		if (fliped) return;
		if (val > 0) show = true;
		if (val > 0 && current != val) {
			guild = guildData[val - 1];
		} else if (current != val) {
			guild = null;
		}
		current = val;
	}, 80);
</script>

<svelte:head>
	<title>Vecno In/Out - The On-Chained Story</title>

	<meta
		name="description"
		content="A group of like-minded individuals working behind the smoke and mirrors to build on-chain a dream. Stay green, be positive add value to all."
	/>

	<!-- Twitter Card data -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@vecno_io" />
	<meta name="twitter:title" content="VECNO.IO - The On-Chained Story" />
	<!-- <meta name="twitter:image" content="https://arc76.space/images/social/intro-twitter.webp" /> -->
	<meta
		name="twitter:description"
		content="A group of like-minded individuals working behind the smoke and mirrors to build on-chain a dream. Stay green, be positive add value to all."
	/>

	<!-- Open Graph data -->
	<meta property="og:title" content="vecno.io" />
	<meta property="og:type" content="overview" />
	<meta property="og:url" content="https://vecno.io/" />

	<meta
		property="og:description"
		content="A group of like-minded individuals working behind the smoke and mirrors to build on-chain a dream. Stay green, be positive add value to all."
	/>
	<meta property="og:site_name" content="VECNO.IO - The On-Chained Story" />
	<!-- <meta property="og:image" content="https://arc76.space/images/social/intro-og.webp" /> -->
</svelte:head>

<div
	class="flipcard flex flex-col flex-grow items-center w-full text-center p-2 mx-auto"
	on:mouseleave={() => {
		if (fliped) return;
		if (active) return;
		show = false;
	}}
>
	<div
		class="card flipcard-back flex flex-col flex-grow w-full
			{fliped ? 'flipcard-back-fliped' : ''} 
			{show ? 'bg-base-200' : ''}"
		bind:this={cardBack}
		on:click={() => {
			if (!fliped) return;
			fliped = !fliped;
			active = true;
		}}
	>
		<CardBack step={$load} {guild} {onClick} {onChange} />
	</div>
	<div
		class="card flipcard-front flex flex-col flex-grow w-full 
			{fliped ? 'flipcard-front-fliped' : ''} 
			{show ? 'bg-base-200' : ''}"
		bind:this={cardFront}
		on:mouseleave={() => {
			if (fliped) return;
			if (active) return;
			show = false;
		}}
	>
		<CardFront step={$load} {guild} {onClick} {onChange} />
	</div>
</div>

<style lang="postcss">
	.flipcard {
		position: relative;
		max-width: 512px;
		max-height: 720px;
		min-height: 610px;
	}
	.flipcard-back {
		top: 0;
		bottom: 0;
		position: absolute;
		backface-visibility: hidden;
		transition: all 0.3s linear;
		transform: perspective(2000px) rotateY(180deg);
	}
	.flipcard-back-fliped {
		transform: perspective(2000px) rotateY(0deg);
	}
	.flipcard-front {
		height: 100%;
		position: relative;
		backface-visibility: hidden;
		transition: all 0.3s linear;
		transform: perspective(2000px) rotateY(0deg);
	}
	.flipcard-front-fliped {
		transform: perspective(2000px) rotateY(-180deg);
	}
</style>
