<script lang="ts">
	import CardImage from '$lib/parts/card-image.svelte';

	export let step: number;
	export let guild: { name: string; tag: string } | null = null;

	export let onClick: (val: number) => void;
	export let onChange: (val: number) => void;
</script>

<div class="flex flex-col items-center p-8 pb-4 ">
	{#if guild}
		<p>{guild.name}</p>
	{:else}
		<p>&nbsp;</p>
	{/if}
</div>

<CardImage {step} fliped={false} {onClick} {onChange} />

<div class="flex flex-col flipcard-content text-sm md:text-base p-14 pt-6">
	{#if guild}
		<p>{guild.tag}</p>
	{:else}
		<p>&nbsp;</p>
	{/if}
</div>

<style lang="postcss">
	.flipcard-content {
		hyphens: manual;
		max-width: 512px;
		overflow-wrap: break-word;
	}
</style>
