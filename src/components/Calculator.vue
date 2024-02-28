<script setup lang="ts">
import { useCalc } from '../store/useCalc.ts';

import Button from './Button.vue';
import Input from './Input.vue';

const calculator = useCalc();
</script>

<template>
	<div class="flex flex-col p-4 bg-gray-800 rounded-[60px]">
		<div class="flex flex-row my-1 mb-8">
			<Input :value="calculator.memory" />
		</div>

		<div class="flex flex-row">
			<Button size="full" variant="gray" text="Clear" />
			<Button size="normal" variant="gray" text="←" />
			<Button size="normal" variant="yellow" text="/" />
		</div>

		<div class="flex flex-row">
			<Button @click="calculator.addDigit('7')" size="normal" variant="blue" text="7" />
			<Button @click="calculator.addDigit('8')" size="normal" variant="blue" text="8" />
			<Button @click="calculator.addDigit('9')" size="normal" variant="blue" text="9" />
			<Button size="normal" variant="yellow" text="*" />
		</div>

		<div class="flex flex-row">
			<Button @click="calculator.addDigit('4')" size="normal" variant="blue" text="4" />
			<Button @click="calculator.addDigit('5')" size="normal" variant="blue" text="5" />
			<Button @click="calculator.addDigit('6')" size="normal" variant="blue" text="6" />
			<Button size="normal" variant="yellow" text="-" />
		</div>

		<div class="flex flex-row">
			<Button @click="calculator.addDigit('1')" size="normal" variant="blue" text="1" />
			<Button @click="calculator.addDigit('2')" size="normal" variant="blue" text="2" />
			<Button @click="calculator.addDigit('3')" size="normal" variant="blue" text="3" />
			<Button size="normal" variant="yellow" text="+" />
		</div>

		<div class="flex flex-row">
			<Button @click="calculator.addDigit('0')" size="full" variant="blue" text="0" />

			<Button size="normal" variant="blue" text="," />
			<Button size="normal" variant="yellow" text="=" />
		</div>
	</div>
</template>