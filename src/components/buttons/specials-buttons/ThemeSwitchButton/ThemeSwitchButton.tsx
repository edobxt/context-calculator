import * as React from 'react';
import {Button} from "baseui/button";
import {IoSunny} from "react-icons/io5";

interface Props {

}

export const ThemeSwitchButton: React.FC<Props> = () => {
	return (
		<>
			<Button><IoSunny size={"1.5em"}/></Button>
		</>
	)
}