<script setup lang="ts">
import { reactive } from 'vue';
import { Variant, Size } from '../types.ts';
import { buttonList } from '../buttons.ts';

import Button from './Button.vue';
import Input from './Input.vue';

interface Store {
    valueInput: string;
}

const store = reactive<Store>({
    valueInput: '',
});

const calc = (value: string) => {
    store.valueInput = value;
};
</script>

<template>
	<div class="flex flex-col p-4 bg-gray-800 rounded-[60px]">
		<div class="flex flex-row my-1 mb-8">
			<Input :value="store.valueInput" />
		</div>

		<div v-for="buttonLine in buttonList" class="flex flex-row">
			<Button 
				v-for="button in buttonLine"
                @click="calc(button.name)"
				:key="button.name"
				:size="<Size>button.size"
				:variant="<Variant>button.variant"
				:text="button.name" />
		</div>
	</div>
</template>../buttons.ts