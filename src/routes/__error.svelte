<script context="module" lang="ts">
	export function load({ error, status }: { error: { message: string }; status: number }) {
		return {
			props: {
				title: `${error?.message}`,
				status: `${status}`
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
	export let status: string;
</script>

<h1><b>{status}</b> - {title}</h1>
