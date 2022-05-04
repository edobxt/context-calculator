import React, {useState} from 'react';
import './App.css';
import {ScreenLayout} from "./layouts/ScreenLayout/ScreenLayout";
import {ButtonLayout} from "./layouts/ButtonLayout/ButtonLayout";
import {Tabs, Tab, FILL}  from "baseui/tabs-motion";

import {MyCalculatorContext} from "./contexts/CalculatorContext";

const App = () => {
	const [memory, setMemory] = useState<string>("")
	const [calcul, setCalcul] = useState<string>("")
	const [readableCalcul, setReadableCalcul] = useState<string>("")
	const [result, setResult] = useState<string>("")
	const [activeKey, setActiveKey] = useState("0");

	return (
		<div className="App">
			<MyCalculatorContext.Provider value={{
				memory, setMemory,
				calcul, setCalcul,
				readableCalcul, setReadableCalcul,
				result, setResult,
			}}>
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
						<Tab title="Basique"></Tab>
						<Tab title="Scientifique"></Tab>
					</Tabs>
				</div>

				<ScreenLayout />
				<ButtonLayout type={activeKey}/>

			</MyCalculatorContext.Provider>
		</div>
	);
}

export default App;
