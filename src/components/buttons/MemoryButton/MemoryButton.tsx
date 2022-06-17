import * as React from 'react';
import {Button, KIND, SHAPE} from "baseui/button";
import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {}

export const MemoryButton: React.FC<Props> = () => {
	const {
		memory, setMemory,
		readableCalcul, setReadableCalcul,
		calcul, setCalcul,
		result,
	} = useCalculatorContext()
	const {theme} = useThemeContext()

	const isMemory = memory !== ""

	const handleMemory = () => {
		if (memory === "")
		{
			setMemory(result === "" ? "" : result)
		}
		else {
			setReadableCalcul(readableCalcul.concat(memory))
			setCalcul(calcul.concat(memory))
			setMemory("")
		}
	}
	return (
		<>
			<Button
				onClick={() => handleMemory()}
				shape={isMemory ? SHAPE.pill : SHAPE.default}
				kind={isMemory ? KIND.tertiary : KIND.primary}
				$style={isMemory
					? {color: "red", fontWeight: "bold", backgroundColor: "white"}
					: (
						theme.type === "light"
							? {fontWeight: "bold", backgroundColor: theme.secondaryColor, fontSize: "1.5em"}
							: {fontWeight: "bold", backgroundColor: theme.secondaryColor, color: theme.mainColor, fontSize: "1.5em"}
					)
				}
			>
				{memory === "" ? "M" : memory}
			</Button>
		</>
	)
}