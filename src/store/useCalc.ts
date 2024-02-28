import { ref } from 'vue';
import { OPERATORS, DIGITS } from '../constants.ts';

export function useCalc() {
	const memory = ref('');

	const isDigit = (value: string) => {
		return DIGITS.includes(value);
	}

	const isOperator = (value: string) => {
		return OPERATORS.includes(value);
	}

	const addDigit = (digit: string) => {
		// si c'est pas un numéro on ajoute pas
		if (!isDigit(digit)) {
			return;
		}

		const lastDigit = memory.value[memory.value.length - 1];

		// si deux points de suite on ajoute pas
		if (lastDigit === '.' && digit === '.') {
			return;
		}

		if (lastDigit === '0' && memory.value.length === 1) {
			clear();
		}

		memory.value += `${digit}`;
	}

	const clear = () => {
		memory.value = '';
	}

	return {
		memory,
		addDigit
	}
}
