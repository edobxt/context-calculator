import { createContext, useContext } from "react";

export type GlobalContent = {
	memory: string
	setMemory:(m: string) => void

	calcul: string
	setCalcul:(c: string) => void

	readableCalcul: string
	setReadableCalcul:(c: string) => void

	result: string
	setResult:(r: string) => void
}

export const MyCalculatorContext = createContext<GlobalContent>({
	memory: '',
	setMemory: () => {},
	calcul: '',
	setCalcul:() => {},
	readableCalcul: '',
	setReadableCalcul:() => {},
	result: '',
	setResult:() => {},
})

export const useCalculatorContext = () => useContext(MyCalculatorContext)