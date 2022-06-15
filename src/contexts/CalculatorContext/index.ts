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

	isTipsModalOpen: boolean
	setIsTipsModalOpen:(b: boolean) => void

	tips: string
	setTips:(t: string) => void
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
	isTipsModalOpen: false,
	setIsTipsModalOpen:() => {},
	tips: '',
	setTips:() => {},
})

export const useCalculatorContext = () => useContext(MyCalculatorContext)