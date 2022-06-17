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
				$style={
					theme.type === "light"
						? {fontWeight: "bold", backgroundColor: theme.secondaryColor, fontSize: "1.5em"}
						: {fontWeight: "bold", backgroundColor: theme.secondaryColor, color: theme.mainColor, fontSize: "1.5em"}
				}
			>
				AC
			</Button>
		</>
	)
}