<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';
import Input from './Input.vue';

type Variant = 'yellow' | 'blue' | 'green' | 'red';

type Size = 'normal' | 'full';

export default defineComponent({
	name: 'Calculator',
	components: { Button, Input },
	setup() {
		let buttons = [
			[
				{name: 'Clear', size: 'full', variant: 'red'},
				{name: 'Del', size: 'normal', variant: 'yellow'},
				{name: '/', size: 'normal', variant: 'green'},
			],
			[
				{name: '7', size: 'normal', variant: 'blue'},
				{name: '8', size: 'normal', variant: 'blue'},
				{name: '9', size: 'normal', variant: 'blue'},
				{name: 'x', size: 'normal', variant: 'green'},
			],
			[
				{name: '4', size: 'normal', variant: 'blue'},
				{name: '5', size: 'normal', variant: 'blue'},
				{name: '6', size: 'normal', variant: 'blue'},
				{name: '-', size: 'normal', variant: 'green'},
			],
			[
				{name: '1', size: 'normal', variant: 'blue'},
				{name: '2', size: 'normal', variant: 'blue'},
				{name: '3', size: 'normal', variant: 'blue'},
				{name: '+', size: 'normal', variant: 'green'},
			],
			[
				{name: '0', size: 'full', variant: 'blue'},
				{name: ',', size: 'normal', variant: 'blue'},
				{name: '=', size: 'normal', variant: 'green'},
			],
		];

		return { buttonList: buttons }
	}
})
</script>

<template>
	<div class="flex flex-col p-4 bg-gray-800 rounded-[60px]">
		<div class="flex flex-row my-1 mb-8">
			<Input />
		</div>

		<div v-for="buttonLine in buttonList" class="flex flex-row">
			<Button 
				v-for="button in buttonLine"
				:key="button.name"
				:size="<Size>button.size"
				:variant="<Variant>button.variant"
				:label="button.name" />
		</div>
	</div>
</template>