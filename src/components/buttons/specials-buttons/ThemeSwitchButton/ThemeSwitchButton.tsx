import * as React from 'react';
import {Button} from "baseui/button";
import {IoSunny} from "react-icons/io5";
import {useThemeContext} from "../../../../contexts/ThemeContext";

interface Props {

}

export const ThemeSwitchButton: React.FC<Props> = () => {
	const {theme} = useThemeContext()

	return (
		<>
			<Button $style={{backgroundColor: theme.mainColor, color: theme.secondaryColor}}>
				<IoSunny size={"1.5em"}/>
			</Button>
		</>
	)
}