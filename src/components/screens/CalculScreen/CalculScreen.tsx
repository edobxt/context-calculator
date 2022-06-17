import * as React from 'react';
import './CalculScreen.css';
import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {}

export const CalculScreen: React.FC<Props> = (props) => {
	const {readableCalcul} = useCalculatorContext()
	const {theme} = useThemeContext()

	return (
		<div className={"calcul-screen"}>
			<div className={"calcul-text"} style={{color: theme.secondaryColor}}>
				{readableCalcul}
			</div>
		</div>
	)
}