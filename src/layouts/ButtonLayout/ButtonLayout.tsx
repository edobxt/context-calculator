import * as React from 'react';
import "./ButtonLayout.css";
import {ButtonItem} from "../../components/ButtonItem/ButtonItem";
import {ResetButton} from "../../components/ResetButton/ResetButton"
import {MemoryButton} from "../../components/MemoryButton/MemoryButton";
import {EqualButton} from "../../components/EqualButton/EqualButton";
import {ScientificButton} from "../../components/ScientificButton/ScientificButton";

interface Props {
	type: string
}

export const ButtonLayout: React.FC<Props> = ({type}: Props) => {
	const isScientific = type === "1"

	return (
		<div className={"button-layout"}>
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