import * as React from 'react';
import axios from "axios";
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../../contexts/CalculatorContext";

interface Props {}

export const EqualButton: React.FC<Props> = () => {
	const {result, setResult, calcul, readableCalcul, setTips, history, setHistory} = useCalculatorContext()

	const doTheMath: any = (c: string) => {
		return eval("(" + c + ")");
	}

	const getTips = (number: number) => {
		if (String(result) !== String(number)) {
			console.log(result)
			console.log(number)
			axios.get(`http://numbersapi.com/${number}`)
				.then(res => {
					setTips(res.data)
					console.log(res.data)
				})
		}
	}

	const handleEqualButton = () => {
		const result: string = doTheMath(calcul);
		setResult(result)

		getTips(Math.round(Number(result)))

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