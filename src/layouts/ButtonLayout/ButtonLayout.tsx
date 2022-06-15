import * as React from 'react';
import "./ButtonLayout.css";

import {ButtonItem} from "../../components/buttons/ButtonItem/ButtonItem";
import {ResetButton} from "../../components/buttons/ResetButton/ResetButton"
import {MemoryButton} from "../../components/buttons/MemoryButton/MemoryButton";
import {EqualButton} from "../../components/buttons/EqualButton/EqualButton";
import {ScientificButton} from "../../components/buttons/ScientificButton/ScientificButton";
import {TipsButton} from "../../components/buttons/specials-buttons/TipsButton/TipsButton";
import {HistoryButton} from "../../components/buttons/specials-buttons/HistoryButton/HistoryButton";
import {PaletteButton} from "../../components/buttons/specials-buttons/PaletteButton/PaletteButton";
import {ThemeSwitchButton} from "../../components/buttons/specials-buttons/ThemeSwitchButton/ThemeSwitchButton";
import {useVisibilityContext} from "../../contexts/VisibilyContext";

interface Props {
	type: string
}

export const ButtonLayout: React.FC<Props> = ({type}: Props) => {
	const {activeKey} = useVisibilityContext();
	const isScientific = activeKey === "1"

	return (
		<div className={"button-layout"}>
			<TipsButton />
			<HistoryButton />
			<PaletteButton />
			<ThemeSwitchButton />

			<ButtonItem element={"("} />
			<ButtonItem element={")"} />
			<MemoryButton />
			<ResetButton />

			{isScientific ?
				(<>
					<ScientificButton element={"cos"} />
					<ScientificButton element={"sin"} />
					<ScientificButton element={"tan"} />
					<ScientificButton element={"√"} />
				</>) : null
			}

			<ButtonItem element={"7"} />
			<ButtonItem element={"8"} />
			<ButtonItem element={"9"} />
			<ButtonItem element={"/"} />
			<ButtonItem element={"4"} />
			<ButtonItem element={"5"} />
			<ButtonItem element={"6"} />
			<ButtonItem element={"*"} />
			<ButtonItem element={"1"} />
			<ButtonItem element={"2"} />
			<ButtonItem element={"3"} />
			<ButtonItem element={"-"} />
			<ButtonItem element={"0"} />
			<ButtonItem element={"."} />
			<EqualButton />
			<ButtonItem element={"+"} />
		</div>
	)
}