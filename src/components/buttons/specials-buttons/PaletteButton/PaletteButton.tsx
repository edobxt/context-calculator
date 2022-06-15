import * as React from 'react';
import {Button} from "baseui/button";
import {IoColorPalette} from "react-icons/io5";

interface Props {}

export const PaletteButton: React.FC<Props> = () => {
	return (
		<>
			<Button>
				<IoColorPalette size={"1.5em"}/>
			</Button>
		</>
	)
}