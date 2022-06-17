import * as React from 'react';
import {Button} from "baseui/button";
import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {}

export const ResetButton: React.FC<Props> = () => {
	const {setReadableCalcul, setCalcul} = useCalculatorContext()
	const {theme} = useThemeContext()

	const resetAll = () => {
		setCalcul("")
		setReadableCalcul("")
	}

	return (
		<>
			<Button
				onClick={resetAll}
				$style={{backgroundColor: theme.secondaryColor, fontWeight: "bold"}}
			>
				AC
			</Button>
		</>
	)
}