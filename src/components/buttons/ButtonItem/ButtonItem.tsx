import * as React from 'react';
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {
	element: string
}

export const ButtonItem: React.FC<Props> = ({element}: Props) => {
	const {readableCalcul, setReadableCalcul, calcul, setCalcul} = useCalculatorContext()
	const {theme} = useThemeContext()

	const addToCalcul = (element: string) => {
		setReadableCalcul(readableCalcul.concat(element))
		setCalcul(calcul.concat(element))
	}

	return (
		<>
			<Button
				onClick={() => addToCalcul(element)}
				$style={theme.type === "light"
					? {fontWeight: "bold", backgroundColor: theme.secondaryColor, fontSize: "1.5em"}
					: {fontWeight: "bold", backgroundColor: theme.secondaryColor, color: theme.mainColor, fontSize: "1.5em"}
			}
			>
				{element}
			</Button>
		</>
	)
}