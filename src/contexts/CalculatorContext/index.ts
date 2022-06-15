import { createContext, useContext } from "react";
import { Calcul } from "../../types/Calcul";

export type GlobalContent = {
	memory: string
	setMemory: (m: string) => void

	calcul: string
	setCalcul: (c: string) => void

	readableCalcul: string
	setReadableCalcul: (c: string) => void

	result: string
	setResult: (r: string) => void

	isTipsModalOpen: boolean
	setIsTipsModalOpen: (b: boolean) => void

	isHistoryModalOpen: boolean
	setIsHistoryModalOpen: (b: boolean) => void

	tips: string
	setTips: (t: string) => void

	history: Calcul[]
	setHistory: (t: Calcul[]) => void
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
	isHistoryModalOpen: false,
	setIsHistoryModalOpen:() => {},
	tips: '',
	setTips:() => {},
	history: [],
	setHistory: () => {},
})

export const useCalculatorContext = () => useContext(MyCalculatorContext)