import * as React from 'react';
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../../contexts/CalculatorContext";

interface Props {}

export const ResetButton: React.FC<Props> = () => {
	const {setReadableCalcul, setCalcul, setResult} = useCalculatorContext()

	const resetAll = () => {
		setCalcul("")
		setReadableCalcul("")
		//setResult("")
	}

	return (
		<>
			<Button onClick={resetAll}>
				AC
			</Button>
		</>
	)
}