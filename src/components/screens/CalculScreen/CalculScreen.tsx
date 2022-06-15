import * as React from 'react';
import './CalculScreen.css';
import {useCalculatorContext} from "../../../contexts/CalculatorContext";

interface Props {}

export const CalculScreen: React.FC<Props> = (props) => {
	const {readableCalcul} = useCalculatorContext()
	return (
		<div className={"calcul-screen"}>
			<div className={"calcul-text"}>
				{readableCalcul}
			</div>
		</div>
	)
}