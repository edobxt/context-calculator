import { createContext, useContext } from "react";

export type VisibilyContent = {
	isPaletteModalOpen: boolean
	setIsPaletteModalOpen: (b: boolean) => void

	isTipsModalOpen: boolean
	setIsTipsModalOpen: (b: boolean) => void

	isHistoryModalOpen: boolean
	setIsHistoryModalOpen: (b: boolean) => void

	activeKey: string
	setActiveKey: (a: string) => void
}

export const MyVisibilityContext = createContext<VisibilyContent>({
	isPaletteModalOpen: false,
	setIsPaletteModalOpen: () => {},
	isTipsModalOpen: false,
	setIsTipsModalOpen:() => {},
	isHistoryModalOpen: false,
	setIsHistoryModalOpen:() => {},
	activeKey: "0",
	setActiveKey:() => {},
})

export const useVisibilityContext = () => useContext(MyVisibilityContext)