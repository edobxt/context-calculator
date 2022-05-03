import * as React from 'react';
import "./ButtonLayout.css";
import {Cell, Grid} from "baseui/layout-grid";
import {ButtonItem} from "../../components/ButtonItem/ButtonItem";

interface Props {}

export const ButtonLayout: React.FC<Props> = (props) => {
	return (
		<div className={"button-layout"}>
			<ButtonItem element={"("} />
			<ButtonItem element={")"} />
			<ButtonItem element={"M"} />
			<ButtonItem element={"AC"} />
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
			<ButtonItem element={"="} />
			<ButtonItem element={"+"} />
		</div>
	)
}