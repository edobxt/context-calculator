import * as React from 'react';
import './ResultScreen.css';
import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {}

export const ResultScreen: React.FC<Props> = (props) => {
	const {result} = useCalculatorContext()
	const {theme} = useThemeContext()

	return (
		<div className={"result-screen"}>
			<div className={"result-text"} style={{color: theme.secondaryColor}}>
				{result}
			</div>
		</div>
	)
}