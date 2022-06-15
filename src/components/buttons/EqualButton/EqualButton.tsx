import * as React from 'react';
import axios from "axios";
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../../contexts/CalculatorContext";

interface Props {}

export const EqualButton: React.FC<Props> = () => {
	const {setResult, calcul, readableCalcul, history, setHistory} = useCalculatorContext()

	const doTheMath: any = (c: string) => {
		return eval("(" + c + ")");
	}

	const handleEqualButton = () => {
		const result: string = doTheMath(calcul);
		setResult(result)

		const calculToHistory = {
			calcul: calcul,
			readableCalcul: readableCalcul,
			result: result
		}
		setHistory([calculToHistory, ...history])
	}

	return (
		<>
			<Button onClick={() => handleEqualButton()}>
				=
			</Button>
		</>
	)
}