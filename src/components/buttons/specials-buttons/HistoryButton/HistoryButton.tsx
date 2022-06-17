import * as React from 'react';
import {Button} from "baseui/button";
import {IoTime} from "react-icons/io5";
import {useVisibilityContext} from "../../../../contexts/VisibilyContext";
import {useThemeContext} from "../../../../contexts/ThemeContext";
import {useCalculatorContext} from "../../../../contexts/CalculatorContext";

interface Props {

}

export const HistoryButton: React.FC<Props> = () => {
	const {setIsHistoryModalOpen} = useVisibilityContext();
	const {theme} = useThemeContext()
	const {history} = useCalculatorContext()

	return (
		<>
			<Button
				onClick={() => setIsHistoryModalOpen(true)}
				$style={
					theme.type === "light"
						? {fontWeight: "bold", backgroundColor: theme.secondaryColor, fontSize: "1.2em"}
						: {fontWeight: "bold", backgroundColor: theme.secondaryColor, color: theme.mainColor, fontSize: "1.2em"}
				}
				disabled={history.length === 0}
			>
				<IoTime size={"1.5em"}/>
			</Button>
		</>
	)
}