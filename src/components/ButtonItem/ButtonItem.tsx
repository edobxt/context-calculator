import * as React from 'react';
import {Button} from "baseui/button";

interface Props {
	element: string
}

export const ButtonItem: React.FC<Props> = ({element}: Props) => {
	return (
		<>
			<Button>{element}</Button>
		</>
	)
}