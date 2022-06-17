import * as React from 'react';
import axios from "axios";
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {}

export const EqualButton: React.FC<Props> = () => {
	const {setResult, calcul, readableCalcul, history, setHistory} = useCalculatorContext()
	const {theme} = useThemeContext()

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
			<Button onClick={() => handleEqualButton()}
				$style={
					theme.type === "light"
						? {fontWeight: "bold", backgroundColor: theme.secondaryColor, fontSize: "1.5em"}
						: {fontWeight: "bold", backgroundColor: theme.secondaryColor, color: theme.mainColor, fontSize: "1.5em"}
				}
			>
				=
			</Button>
		</>
	)
}