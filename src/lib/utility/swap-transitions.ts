import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface SwapStep {
	state: Writable<number>;
	active: Writable<number>;
	goTo: (step: number) => void;
	setTo: (step: number) => void;
	onOutro: () => void;
	increase: () => void;
	decrease: () => void;
}

export interface SwapData<Type> {
	state: Writable<Type | null>;
	swapTo: (to: Type) => void;
	onOutro: () => void;
}

export const swapStepper = (max: number): SwapStep => {
	const active = writable(-1);
	const state = writable(-1);
	const _max = max - 1;
	let current = -1;
	let next = -1;

	const onOutro = (): void => {
		active.set(next);
		state.set(next);
		current = next;
	};

	const setTo = (step: number): void => {
		active.set(step);
		state.set(step);
		current = step;
		next = step;
	};

	const goTo = (step: number): void => {
		if (step < 0 || step > _max) return;
		if (next !== current) return;
		if (step == current) return;
		next = step;
		state.set(-1);
	};

	const increase = (): void => {
		if (next !== current) return;
		if (current >= _max) return;
		next = current + 1;
		state.set(-1);
	};

	const decrease = (): void => {
		if (next !== current) return;
		if (current <= 0) return;
		next = current - 1;
		state.set(-2);
	};

	return {
		goTo,
		setTo,
		state,
		active,
		onOutro,
		increase,
		decrease
	};
};

export function swapTransition<Type>(init: Type): SwapData<Type> {
	const state = writable<Type | null>(init);
	let next = init;

	const swapTo = (to: Type): void => {
		if (next === to) return;
		state.set(null);
		next = to;
	};

	const onOutro = (): void => {
		state.set(next);
	};

	return {
		state,
		swapTo,
		onOutro
	};
}
