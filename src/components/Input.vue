<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    value: {type: String, default: ''}
})
</script>

<template>
	<div class="w-full h-24 flex flex-col justify-center px-8 text-slate-400 text-3xl text-right bg-slate-900 rounded-full">
		<p>{{ props.value }}</p>
	</div>
</template>