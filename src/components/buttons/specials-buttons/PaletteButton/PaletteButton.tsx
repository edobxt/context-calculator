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
				$style={
					theme.type === "light"
						? {fontWeight: "bold", backgroundColor: theme.secondaryColor, fontSize: "1.2em"}
						: {fontWeight: "bold", backgroundColor: theme.secondaryColor, color: theme.mainColor, fontSize: "1.2em"}
				}
			>
				<IoColorPalette size={"1.5em"}/>
			</Button>
		</>
	)
}