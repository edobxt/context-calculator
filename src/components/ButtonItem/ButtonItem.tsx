import * as React from 'react';
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../contexts/CalculatorContext";

interface Props {
	element: string
}

export const ButtonItem: React.FC<Props> = ({element}: Props) => {
	const {readableCalcul, setReadableCalcul, calcul, setCalcul} = useCalculatorContext()

	const addToCalcul = (element: string) => {
		setReadableCalcul(readableCalcul.concat(element))
		setCalcul(calcul.concat(element))
	}

	return (
		<>
			<Button onClick={() => addToCalcul(element)} $style={{fontWeight: "bold"}}>
				{element}
			</Button>
		</>
	)
}