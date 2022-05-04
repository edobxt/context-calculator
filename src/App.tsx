import React, {useState} from 'react';
import './App.css';
import {ScreenLayout} from "./layouts/ScreenLayout/ScreenLayout";
import {ButtonLayout} from "./layouts/ButtonLayout/ButtonLayout";
import {MyCalculatorContext} from "./contexts/CalculatorContext";

const App = () => {
	const [memory, setMemory] = useState<string>("")
	const [calcul, setCalcul] = useState<string>("")
	const [readableCalcul, setReadableCalcul] = useState<string>("")
	const [result, setResult] = useState<string>("")

	return (
		<div className="App">
			<MyCalculatorContext.Provider value={{
				memory, setMemory,
				calcul, setCalcul,
				readableCalcul, setReadableCalcul,
				result, setResult,
			}}>
				<ScreenLayout />
				<ButtonLayout />
			</MyCalculatorContext.Provider>
		</div>
	);
}

export default App;
