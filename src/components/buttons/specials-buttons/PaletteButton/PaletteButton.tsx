import * as React from 'react';
import {Button} from "baseui/button";
import {IoColorPalette} from "react-icons/io5";
import {useVisibilityContext} from "../../../../contexts/VisibilyContext";
import {useThemeContext} from "../../../../contexts/ThemeContext";

interface Props {}

export const PaletteButton: React.FC<Props> = () => {
	const {setIsPaletteModalOpen} = useVisibilityContext();
	const {theme} = useThemeContext()

	return (
		<>
			<Button
				onClick={() => setIsPaletteModalOpen(true)}
				$style={{backgroundColor: theme.secondaryColor}}
			>
				<IoColorPalette size={"1.5em"}/>
			</Button>
		</>
	)
}