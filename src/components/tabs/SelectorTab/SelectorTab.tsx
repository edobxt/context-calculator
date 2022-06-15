import * as React from 'react';
import {useVisibilityContext} from "../../../contexts/VisibilyContext";
import {FILL, Tab, Tabs} from "baseui/tabs-motion";

interface Props {}

export const SelectorTab: React.FC<Props> = () => {
	const {activeKey, setActiveKey} = useVisibilityContext();

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
			>
				<Tab title="Basic"></Tab>
				<Tab title="Scientific"></Tab>
			</Tabs>
		</div>
	)
}