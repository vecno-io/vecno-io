<script lang="ts">
	export let step: number;
	export let fliped: boolean;

	export let onClick: (val: number) => void;
	export let onChange: (val: number) => void;

	$: pointer = !fliped && step > 4;
</script>

<svg
	data-name="Arc Logo"
	viewBox="0 0 512 512"
	class="card-size"
	overflow="visible"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
	on:mouseleave={() => {
		onChange(0);
	}}
>
	<path
		id="G01"
		on:click={() => {
			onClick(1);
		}}
		on:mouseenter={() => {
			onChange(1);
		}}
		class="core
		{pointer ? 'hovers' : ''}
		{step > 0 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="M 355.88187,197.77783 H 156.09773 l 99.89207,173.04603 z"
	/>

	<path
		id="G02"
		on:click={() => {
			onClick(2);
		}}
		on:mouseenter={() => {
			onChange(2);
		}}
		class="extend
		{pointer ? 'hovers' : ''}
		{step > 1 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="M 155.98993,179.23143 H 355.98967 L 255.9898,5.9999399 Z"
	/>
	<path
		id="G03"
		on:click={() => {
			onClick(2);
		}}
		on:mouseenter={() => {
			onChange(2);
		}}
		class="extend
		{pointer ? 'hovers' : ''}
		{step > 1 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="M 239.65506,378.60523 139.98439,205.94056 40.312555,378.60523 Z"
	/>
	<path
		id="G04"
		on:click={() => {
			onClick(2);
		}}
		on:mouseenter={() => {
			onChange(2);
		}}
		class="extend
		{pointer ? 'hovers' : ''}
		{step > 1 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="m 371.99521,205.94056 -99.67067,172.66467 h 199.3425 z"
	/>
	<path
		id="E01"
		on:click={() => {
			onClick(3);
		}}
		on:mouseenter={() => {
			onChange(3);
		}}
		class="
		{pointer ? 'hovers' : ''}
		{step > 2 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="M 136.57417,174.95185 230.49198,12.254713 43.034239,120.61321 Z"
	/>
	<path
		id="E02"
		on:click={() => {
			onClick(3);
		}}
		on:mouseenter={() => {
			onChange(3);
		}}
		class="
		{pointer ? 'hovers' : ''}
		{step > 2 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="m 375.52946,175.16861 93.74742,-54.771 L 281.18277,11.7273 Z"
	/>
	<path
		id="E03"
		on:click={() => {
			onClick(3);
		}}
		on:mouseenter={() => {
			onChange(3);
		}}
		class="
		{pointer ? 'hovers' : ''}
		{step > 2 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="M 127.30213,191.01419 33.795814,136.6941 33.554711,353.41574 Z"
	/>
	<path
		id="E04"
		on:click={() => {
			if (!fliped) onClick(3);
		}}
		on:mouseenter={() => {
			onChange(3);
		}}
		class="
		{pointer ? 'hovers' : ''}
		{step > 2 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="m 384.80266,191.23095 93.40315,161.80575 0.23878,-216.51531 z"
	/>
	<path
		id="E05"
		on:click={() => {
			onClick(3);
		}}
		on:mouseenter={() => {
			onChange(3);
		}}
		class="
		{pointer ? 'hovers' : ''}
		{step > 2 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="M 58.541348,397.15163 246.21005,505.4371 246.67835,397.15163 Z"
	/>
	<path
		id="E06"
		on:click={() => {
			onClick(3);
		}}
		on:mouseenter={() => {
			onChange(3);
		}}
		class="
		{pointer ? 'hovers' : ''}
		{step > 2 ? 'visible' : ''} 
		{fliped ? 'visible-back' : ''}"
		d="M 265.22475,397.15163 264.75529,505.99929 452.81811,397.15163 Z"
	/>
</svg>

<style lang="postcss">
	path {
		opacity: 0;
		transform: none;
		transition: 0.6s all ease-in 0s;
	}

	.card-size {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.visible {
		opacity: 0.1;
	}
	/* .visible-dim {
		opacity: 0.06;
	} */
	.visible-back {
		opacity: 0.02;
	}

	.hovers {
		cursor: pointer;
		transition: 0.2s all ease-out 0s;
	}
	.hovers:hover {
		transform: scale(1.04);
	}
	.hovers:active {
		transform: scale(0.96);
	}

	.core:hover {
		opacity: 0.3;
	}
	.core:active {
		opacity: 0.2;
	}
	.extend:hover {
		opacity: 0.2;
	}
	/* .extended:hover {
		opacity: 0.1;
	} */

	#G01 {
		transform-origin: 50% 50%;
	}
	#G02 {
		transform-origin: 50% 24%;
	}
	#G03 {
		transform-origin: 34% 50%;
	}
	#G04 {
		transform-origin: 66% 50%;
	}
	#E01 {
		transform-origin: 34% 24%;
	}
	#E02 {
		transform-origin: 66% 24%;
	}
	#E03 {
		transform-origin: 12% 44%;
	}
	#E04 {
		transform-origin: 88% 44%;
	}

	#E05 {
		transform-origin: 44% 88%;
	}
	#E06 {
		transform-origin: 56% 88%;
	}
</style>
