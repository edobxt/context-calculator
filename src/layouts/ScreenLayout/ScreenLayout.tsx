import * as React from 'react';
import {ResultScreen} from "../../components/ResultScreen/ResultScreen";
import {CalculScreen} from "../../components/CalculScreen/CalculScreen";

interface Props {}

export const ScreenLayout: React.FC<Props> = (props) => {
	return (
		<>
			<CalculScreen />
			<ResultScreen />
		</>
	)
}