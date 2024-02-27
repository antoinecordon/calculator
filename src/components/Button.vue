<script lang="ts">
import { PropType, defineComponent } from 'vue';

type Variant = 'yellow' | 'blue' | 'green' | 'red';

type Size = 'normal' | 'full';

type VariantClasses = {
  [key in Variant]: string;
};

type SizeClasses = {
	[key in Size]: string
}

export default defineComponent({
	name: 'Button',
	props: {
		variant: {type: String as PropType<Variant>, default: 'blue'},
		size: {type: String as PropType<Size>, default: 'normal'},
		label: {type: String}
	},
	setup(props) {
		const variantsClasses: VariantClasses = {
			yellow: "bg-yellow-600 hover:bg-yellow-500",
			blue: "bg-blue-600 hover:bg-blue-500",
			green: "bg-green-600 hover:bg-green-500",
			red: "bg-red-600 hover:bg-red-500",
		};

		const sizesClasses: SizeClasses = {
			normal: 'w-24',
			full: 'w-48'
		}

		return {
			color: variantsClasses[props.variant],
			size: sizesClasses[props.size],
			label: props.label
		};
  },
});
</script>

<template>
	<button :class="`${color} ${size} h-24 border-8 border-gray-800 rounded-full text-xl text-slate-300 font-bold`">
		{{ label }}
	</button>
</template>