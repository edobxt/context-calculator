import * as React from 'react';
import './ResultScreen.css';
import {useCalculatorContext} from "../../contexts/CalculatorContext";

interface Props {}

export const ResultScreen: React.FC<Props> = (props) => {
	const {result} = useCalculatorContext()
	return (
		<div className={"result-screen"}>
			<div className={"result-text"}>
				{result}
			</div>
		</div>
	)
}