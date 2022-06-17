import * as React from 'react';
import {Button} from "baseui/button";
import {IoBulb} from "react-icons/io5";
import {IoBulbOutline} from "react-icons/io5";
import {useCalculatorContext} from "../../../../contexts/CalculatorContext";
import {useVisibilityContext} from "../../../../contexts/VisibilyContext";
import {useThemeContext} from "../../../../contexts/ThemeContext";

interface Props {}

export const TipsButton: React.FC<Props> = () => {
	const {result} = useCalculatorContext()
	const {setIsTipsModalOpen} = useVisibilityContext()
	const {theme} = useThemeContext()

	return (
		<>
			<Button
				disabled={!result}
				onClick={() => setIsTipsModalOpen(true)}
				$style={{backgroundColor: theme.secondaryColor, color: theme.mainColor}}
			>
				{
					result
					? <IoBulb size={"1.5em"} />
					: <IoBulbOutline size={"1.5em"} />
				}
			</Button>
		</>
	)
}