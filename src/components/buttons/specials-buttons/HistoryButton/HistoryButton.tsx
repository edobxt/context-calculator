import * as React from 'react';
import {Button} from "baseui/button";
import {IoTime} from "react-icons/io5";
import {useCalculatorContext} from "../../../../contexts/CalculatorContext";
import {useVisibilityContext} from "../../../../contexts/VisibilyContext";

interface Props {

}

export const HistoryButton: React.FC<Props> = () => {
	const {setIsHistoryModalOpen} = useVisibilityContext();
	return (
		<>
			<Button
				onClick={() => setIsHistoryModalOpen(true)}
			>
				<IoTime size={"1.5em"}/>
			</Button>
		</>
	)
}