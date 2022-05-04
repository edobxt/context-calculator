import * as React from 'react';
import {Button, KIND, SHAPE} from "baseui/button";
import {useCalculatorContext} from "../../contexts/CalculatorContext";

interface Props {}

export const MemoryButton: React.FC<Props> = () => {
	const {
		memory, setMemory,
		readableCalcul, setReadableCalcul,
		calcul, setCalcul,
		result,
	} = useCalculatorContext()

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
			>
				{memory === "" ? "M" : memory}
			</Button>
		</>
	)
}