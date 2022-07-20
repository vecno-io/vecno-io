<script lang="ts">
	import CardImage from '$lib/parts/card-image.svelte';

	export let step: number;
	export let guild: { name: string; tag: string; info: string; description: string } | null = null;

	export let onClick: (val: number) => void;
	export let onChange: (val: number) => void;
</script>

<div class="flex flex-col items-center p-8 pb-4">
	{#if guild}
		<p>{guild.name}</p>
	{:else}
		<p>&nbsp;</p>
	{/if}
</div>

<div class="svg-wrap flipcard-content flex-1">
	<div class="svg-overlay flex flex-col justify-center pt-10 md:pt-12 px-14 h-full">
		<div class="text-sm md:text-base pt-0 md:pt-4">
			{#if guild}
				<p>{guild.description}</p>
			{:else}
				<p>&nbsp;</p>
			{/if}
		</div>
		<div class="text-sm md:text-base pt-12 md:pt-12">
			{#if guild}
				<p>{guild.info}</p>
			{:else}
				<p>&nbsp;</p>
			{/if}
		</div>
	</div>
	<div class="svg-image">
		<CardImage {step} fliped={true} {onClick} {onChange} />
	</div>
</div>

<div class="flex flex-col p-14 text-sm md:text-base flipcard-content">
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
	.svg-wrap {
		/* height: 512px; */
		position: relative;
	}
	.svg-image {
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		position: absolute;
	}
	.svg-overlay {
		z-index: 9;
		height: 100%;
		position: relative;
	}
</style>
