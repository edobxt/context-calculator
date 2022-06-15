import React, {useEffect, useState} from 'react';
import './App.css';
import {ScreenLayout} from "./layouts/ScreenLayout/ScreenLayout";
import {ButtonLayout} from "./layouts/ButtonLayout/ButtonLayout";
import {TipsModal} from "./components/modals/TipsModal/TipsModal";
import {Calcul} from "./types/Calcul";

import {MyCalculatorContext} from "./contexts/CalculatorContext";
import {MyVisibilityContext} from "./contexts/VisibilyContext";

import {HistoryModal} from "./components/modals/HistoryModal/HistoryModal";
import {SelectorTab} from "./components/tabs/SelectorTab/SelectorTab";
import axios from "axios";

const App = () => {
	const [memory, setMemory] = useState<string>("")
	const [calcul, setCalcul] = useState<string>("")
	const [readableCalcul, setReadableCalcul] = useState<string>("")
	const [result, setResult] = useState<string>("")

	const [tips, setTips] = useState('')
	const [history, setHistory] = useState<Calcul[]>([])

	const [activeKey, setActiveKey] = useState("0")
	const [isTipsModalOpen, setIsTipsModalOpen] = useState(false)
	const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)
	const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false)

	useEffect(() => {
		if (Math.round(Number(result)) > 0) {
			axios.get(`http://numbersapi.com/${Math.round(Number(result))}`)
				.then(res => {
					setTips(res.data)
					console.log(Math.round(Number(result)))
					console.log(res.data)
				})
		}
	}, [result])

	return (
		<div className="App">
			<MyVisibilityContext.Provider value={{
				isPaletteModalOpen, setIsPaletteModalOpen,
				isTipsModalOpen, setIsTipsModalOpen,
				isHistoryModalOpen, setIsHistoryModalOpen,
				activeKey, setActiveKey
			}}>
				<MyCalculatorContext.Provider value={{
					memory, setMemory,
					calcul, setCalcul,
					readableCalcul, setReadableCalcul,
					result, setResult,
					tips, setTips,
					history, setHistory,
				}}>

					<SelectorTab />

					<ScreenLayout />
					<ButtonLayout type={activeKey}/>

					<TipsModal />
					<HistoryModal />

				</MyCalculatorContext.Provider>
			</MyVisibilityContext.Provider>
		</div>
	);
}

export default App;
