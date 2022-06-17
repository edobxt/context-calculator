import * as React from 'react';
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {
	element: string
}

export const ScientificButton: React.FC<Props> = ({element}: Props) => {
	const {readableCalcul, setReadableCalcul, calcul, setCalcul} = useCalculatorContext()
	const {theme} = useThemeContext()

	const addToCalcul = (element: string) => {
		if (element == "√") {
			setReadableCalcul(readableCalcul.concat("√("))
			setCalcul(calcul.concat("Math.sqrt("))
		}
		else {
			setReadableCalcul(readableCalcul.concat(`${element}(`))
			setCalcul(calcul.concat(`Math.${element}(`))
		}
	}

	return (
		<>
			<Button onClick={() => addToCalcul(element)} $style={{backgroundColor: theme.secondaryColor}}>
				{element}
			</Button>
		</>
	)
}