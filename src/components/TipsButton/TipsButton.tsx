import * as React from 'react';
import {Button} from "baseui/button";
import {IoBulb} from "react-icons/io5";

interface Props {

}

export const TipsButton: React.FC<Props> = () => {
	return (
		<>
			<Button>
				<IoBulb size={"1.5em"} />
			</Button>
		</>
	)
}