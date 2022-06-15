import React, {useState} from 'react';
import './App.css';
import {ScreenLayout} from "./layouts/ScreenLayout/ScreenLayout";
import {ButtonLayout} from "./layouts/ButtonLayout/ButtonLayout";
import {TipsModal} from "./components/TipsModal/TipsModal";
import {Tabs, Tab, FILL}  from "baseui/tabs-motion";
import {Calcul} from "./types/Calcul";

import {MyCalculatorContext} from "./contexts/CalculatorContext";
import {HistoryModal} from "./components/HistoryModal/HistoryModal";

const App = () => {
	const [memory, setMemory] = useState<string>("")
	const [calcul, setCalcul] = useState<string>("")
	const [readableCalcul, setReadableCalcul] = useState<string>("")
	const [result, setResult] = useState<string>("")
	const [activeKey, setActiveKey] = useState("0")
	const [isTipsModalOpen, setIsTipsModalOpen] = useState(false)
	const [tips, setTips] = useState('')
	const [history, setHistory] = useState<Calcul[]>([])
	const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)

	return (
		<div className="App">
			<MyCalculatorContext.Provider value={{
				memory, setMemory,
				calcul, setCalcul,
				readableCalcul, setReadableCalcul,
				result, setResult,
				isTipsModalOpen, setIsTipsModalOpen,
				isHistoryModalOpen, setIsHistoryModalOpen,
				tips, setTips,
				history, setHistory,
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
						<Tab title="Basic"></Tab>
						<Tab title="Scientific"></Tab>
					</Tabs>
				</div>

				<ScreenLayout />
				<ButtonLayout type={activeKey}/>

				<TipsModal />
				<HistoryModal />

			</MyCalculatorContext.Provider>
		</div>
	);
}

export default App;
