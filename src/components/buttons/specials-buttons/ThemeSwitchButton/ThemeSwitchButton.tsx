import * as React from 'react';
import {Button} from "baseui/button";
import {IoSunny} from "react-icons/io5";
import {IoMoon} from "react-icons/io5";
import {useThemeContext} from "../../../../contexts/ThemeContext";

interface Props {

}

export const ThemeSwitchButton: React.FC<Props> = () => {
	const {theme, setTheme} = useThemeContext()
	const inversedTheme = theme.type === "light"
		? {name: theme.name, mainColor: theme.secondaryColor, secondaryColor: theme.mainColor, type: "dark"}
		: {name: theme.name, mainColor: theme.secondaryColor, secondaryColor: theme.mainColor, type: "light"}

	return (
		<>
			<Button
				$style={{backgroundColor: theme.mainColor, color: theme.secondaryColor}}
				onClick={() => setTheme(inversedTheme)}
			>
				{theme.type === "light"
					? <IoSunny size={"1.5em"} />
					: <IoMoon size={"1.5em"} />
				}
			</Button>
		</>
	)
}