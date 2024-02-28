<script setup lang="ts">
import { Variant, Size, VariantClasses, SizeClasses } from '../types.ts';

const props = defineProps<{
    variant: Variant,
    size: Size,
    text: string
}>()

const variantsClasses: VariantClasses = {
    yellow: "bg-yellow-600 hover:bg-yellow-500",
    blue: "bg-blue-600 hover:bg-blue-500",
    gray: "bg-slate-500 hover:bg-slate-400"
};

const sizesClasses: SizeClasses = {
    normal: 'w-24',
    full: 'w-48'
}
</script>

<template>
	<button
        :class="`${variantsClasses[props.variant]} ${sizesClasses[props.size]} h-24 border-8 border-gray-800 rounded-full text-xl text-slate-300 font-bold`">
		{{ props.text }}
	</button>
</template>