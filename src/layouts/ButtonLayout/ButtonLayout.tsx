import * as React from 'react';
import "./ButtonLayout.css";
import {ButtonItem} from "../../components/ButtonItem/ButtonItem";
import {ResetButton} from "../../components/ResetButton/ResetButton"
import {MemoryButton} from "../../components/MemoryButton/MemoryButton";
import {EqualButton} from "../../components/EqualButton/EqualButton";

interface Props {}

export const ButtonLayout: React.FC<Props> = (props) => {
	return (
		<div className={"button-layout"}>
			<ButtonItem element={"("} />
			<ButtonItem element={")"} />
			<MemoryButton />
			<ResetButton />
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