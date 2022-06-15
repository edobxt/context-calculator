import * as React from 'react';
import {useCalculatorContext} from "../../contexts/CalculatorContext";
import {Button} from "baseui/button";
import {IoBulb} from "react-icons/io5";
import {IoBulbOutline} from "react-icons/io5";

interface Props {

}

export const TipsButton: React.FC<Props> = () => {
	const {result, setIsOpen} = useCalculatorContext()
	return (
		<>
			<Button
				disabled={!result}
				onClick={() => setIsOpen(true)}
			>
				{
					result
					? <IoBulb size={"1.5em"} />
					: <IoBulbOutline size={"1.5em"} />
				}
			</Button>
		</>
	)
}