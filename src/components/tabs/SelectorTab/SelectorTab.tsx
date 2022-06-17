import * as React from 'react';
import "./SelectorTab.css";
import {useVisibilityContext} from "../../../contexts/VisibilyContext";
import {FILL, Tab, Tabs} from "baseui/tabs-motion";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {}

export const SelectorTab: React.FC<Props> = () => {
	const {activeKey, setActiveKey} = useVisibilityContext();
	const {theme} = useThemeContext()

	return (
		<div className={"tabs"}>
			<Tabs
				activeKey={activeKey}
				onChange={({ activeKey }) => {
					// @ts-ignore
					setActiveKey(activeKey);
				}}
				activateOnFocus
				fill={FILL.fixed}
				overrides={{
					TabHighlight: {
						style: ({ $theme }) => ({
							backgroundColor: theme.secondaryColor
						})
					},
					TabBorder: {
						style: ({ $theme }) => ({
							backgroundColor: theme.mainColor
						})
					}
				}}
			>
				<Tab title="Basic"></Tab>
				<Tab title="Scientific"></Tab>
			</Tabs>
		</div>
	)
}