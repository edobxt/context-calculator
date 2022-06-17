import * as React from 'react';
import {Button} from "baseui/button";
import {IoTime} from "react-icons/io5";
import {useVisibilityContext} from "../../../../contexts/VisibilyContext";
import {useThemeContext} from "../../../../contexts/ThemeContext";

interface Props {

}

export const HistoryButton: React.FC<Props> = () => {
	const {setIsHistoryModalOpen} = useVisibilityContext();
	const {theme} = useThemeContext()

	return (
		<>
			<Button
				onClick={() => setIsHistoryModalOpen(true)}
				$style={{backgroundColor: theme.secondaryColor}}
			>
				<IoTime size={"1.5em"}/>
			</Button>
		</>
	)
}