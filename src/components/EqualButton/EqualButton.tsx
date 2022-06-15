import * as React from 'react';
import axios from "axios";
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../contexts/CalculatorContext";

interface Props {}

export const EqualButton: React.FC<Props> = () => {
	const {setResult, calcul, setTips} = useCalculatorContext()

	const doTheMath: any = (c: string) => {
		return eval("(" + c + ")");
	}

	const getTips = (number: number) => {
		axios.get(`http://numbersapi.com/${number}`)
			.then(res => {
				setTips(res.data)
			})
	}

	const handleEqualButton = () => {
		const result: string = doTheMath(calcul);
		setResult(result)
		getTips(Math.round(Number(result)))
	}

	return (
		<>
			<Button onClick={() => handleEqualButton()}>
				=
			</Button>
		</>
	)
}