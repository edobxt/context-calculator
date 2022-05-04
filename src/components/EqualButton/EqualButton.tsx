import * as React from 'react';
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../contexts/CalculatorContext";

interface Props {}

export const EqualButton: React.FC<Props> = () => {
	const {setResult, calcul} = useCalculatorContext()

	const doTheMath: any = (c: string) => {
		return eval("(" + c + ")");
	}

	return (
		<>
			<Button onClick={() => setResult(doTheMath(calcul))}>
				=
			</Button>
		</>
	)
}