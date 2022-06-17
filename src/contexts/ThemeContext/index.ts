import { createContext, useContext} from "react";

export type Theme = {
	name: string
	mainColor: string
	secondaryColor: string
}

export type ThemeContent = {
	theme: Theme
	setTheme: (t: Theme) => void
}

export const MyThemeContext = createContext<ThemeContent>( {
	theme: {name: '', mainColor: '', secondaryColor: ''},
	setTheme: () => {}
})

export const useThemeContext = () => useContext(MyThemeContext)