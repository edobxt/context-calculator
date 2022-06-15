import * as React from 'react';
import {Button} from "baseui/button";
import {IoTime} from "react-icons/io5";

interface Props {

}

export const HistoryButton: React.FC<Props> = () => {
	return (
		<>
			<Button><IoTime size={"1.5em"}/></Button>
		</>
	)
}