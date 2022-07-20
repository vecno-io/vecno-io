<script lang="ts">
	import { onMount } from 'svelte';

	// import BaseRain from '$lib/parts/bg-rain-base.svelte';

	import '../app.css';

	let drawerContent: HTMLDivElement;

	onMount(() => {
		const _scroll = drawerContent.scrollTo;
		window.scrollTo = function () {
			_scroll.apply(drawerContent);
		};
	});
</script>

<!-- <BaseRain /> -->
<div class="drawer h-screen w-full">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col" bind:this={drawerContent}>
		<!-- Page Header -->
		<header class="sticky w-full top-0 z-50 bg-base-300 bg-opacity-95">
			<div class="navbar xl:container mx-auto">
				<div class="navbar-start">
					<label for="my-drawer-3" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					</label>
				</div>
				<div class="navbar-center">
					<a href={`/`} class="mx-auto">
						<span class="text-lg font-bold">VECNO.IO</span>
					</a>
				</div>
				<!-- Navigation: Large Screen -->
				<div class="navbar-end px-2">
					<div class="dropdown dropdown-end  mx-1">
						<button tabindex="0" class="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								version="1.1"
								viewBox="0 0 90 90"
								fill="currentColor"
								stroke="none"
							>
								<path
									d="M72.2,4.6L53.4,32.5c-1.3,1.9,1.2,4.2,3,2.6L74.9,19c0.5-0.4,1.2-0.1,1.2,0.6v50.3c0,0.7-0.9,1-1.3,0.5l-56-67C17,1.2,14.4,0,11.5,0h-2C4.3,0,0,4.3,0,9.6v70.8C0,85.7,4.3,90,9.6,90c3.3,0,6.4-1.7,8.2-4.6l18.8-27.9c1.3-1.9-1.2-4.2-3-2.6l-18.5,16c-0.5,0.4-1.2,0.1-1.2-0.6V20.1c0-0.7,0.9-1,1.3-0.5l56,67c1.8,2.2,4.5,3.4,7.3,3.4h2c5.3,0,9.6-4.3,9.6-9.6V9.6c0-5.3-4.3-9.6-9.6-9.6C77.1,0,74,1.7,72.2,4.6z"
								/>
							</svg>
						</button>
						<ul
							tabindex="0"
							class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
						>
							<li>
								<button class="rounded-lg btn-disabled"> Soon™ </button>
							</li>
							<li>
								<button class="rounded-lg btn-disabled"> Connect </button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<!-- Page content here -->
		<main class="flex-base flex-grow justify-start py-12">
			<slot />
		</main>
		<!-- Page footer -->
		<footer class="footer bg-base-300 bg-opacity-75 text-neutral-content p-4 mt-6 w-full">
			<div class="flex flex-col w-full md:flex-row-reverse xl:container xl:mx-auto">
				<div class="flex mx-auto text-center md:mx-0 md:my-auto md:text-right">
					<a target="_blank" class="p-2 pb-0" href="https://www.arc76.space">
						<svg
							width="48"
							height="48"
							viewBox="0 0 1280 1280"
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Arc76 Space</title><path
								d="m710 429.6l-170.7 4.8-123.2 164.5 121.3 191.6-70.8 140.3-206.6-325.4 211.1-297.6 313-7zm140.7-114.1l190.1 290.5-208.6 323.6h-273l-130.2 128.9 153-257.8 180.5-0.5 126.7-206.8-126.5-161.7 122.8-272.7zm-52.4 143.8l-173.7 352.9-70.8 40.9 242.6-487.4z"
							/>
							/>
						</svg>
					</a>
					<a target="_blank" class="p-2 pt-4 pb-2" href="https://www.story-arc.io">
						<svg
							width="30"
							height="30"
							viewBox="0 0 512 512"
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Story Arc</title>
							<g id="L01">
								<path id="G01" d="M 155.98993,179.23143 H 355.98967 L 255.9898,5.9999399 Z" />
								<path id="G02" d="M 355.88187,197.77783 H 156.09773 l 99.89207,173.04603 z" />
								<path
									id="G03"
									d="M 239.65506,378.60523 139.98439,205.94056 40.312555,378.60523 Z"
								/>
								<path id="G04" d="m 371.99521,205.94056 -99.67067,172.66467 h 199.3425 z" />
								<path
									id="S01"
									d="M 136.57417,174.95185 230.49198,12.254713 43.034239,120.61321 Z"
								/>
								<path id="S02" d="m 375.52946,175.16861 93.74742,-54.771 L 281.18277,11.7273 Z" />
								<path id="S03" d="M 127.30213,191.01419 33.795814,136.6941 33.554711,353.41574 Z" />
								<path id="S04" d="m 384.80266,191.23095 93.40315,161.80575 0.23878,-216.51531 z" />
								<path id="S05" d="M 58.541348,397.15163 246.21005,505.4371 246.67835,397.15163 Z" />
								<path
									id="S06"
									d="M 265.22475,397.15163 264.75529,505.99929 452.81811,397.15163 Z"
								/>
							</g>
						</svg>
					</a>
				</div>
				<div class="mx-auto pt-0 text-center md:mx-0 md:my-auto md:flex-grow" />
				<div class="mx-auto pt-2 text-center md:mx-0 md:my-auto md:text-left">
					<p class="text-xs pb-1">
						&copy;
						<a href="https://www.vecno.io/" target="_blank">vecno.io - bit awkward</a>
					</p>
				</div>
			</div>
		</footer>
	</div>
	<!-- Navigation: Small Screen -->
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</div>
</div>
