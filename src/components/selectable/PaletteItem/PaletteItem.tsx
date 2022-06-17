import * as React from 'react';
import "./PaletteItem.css";

interface Props {
	name: string
	mainColor: string
	secondaryColor: string
	selected: boolean
}

export const PaletteItem: React.FC<Props> = ({name, mainColor, secondaryColor, selected}: Props) => {

	const backgroundColor: string = `linear-gradient(-45deg,${secondaryColor}, ${secondaryColor} 49%,`
	 + `#FEFEFE 49%, #FEFEFE 51%, ${mainColor} 51%)`;

	const paletteClassName = selected ? "main-circle selected" : "main-circle";

	return (
		<div className={paletteClassName} style={{background: backgroundColor}}></div>
	)
}
