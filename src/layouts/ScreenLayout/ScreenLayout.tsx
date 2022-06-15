import * as React from 'react';
import {ResultScreen} from "../../components/screens/ResultScreen/ResultScreen";
import {CalculScreen} from "../../components/screens/CalculScreen/CalculScreen";

interface Props {}

export const ScreenLayout: React.FC<Props> = (props) => {
	return (
		<>
			<CalculScreen />
			<ResultScreen />
		</>
	)
}