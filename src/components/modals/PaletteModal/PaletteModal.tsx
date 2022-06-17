import * as React from 'react';
import {useVisibilityContext} from "../../../contexts/VisibilyContext";
import {Modal, ModalHeader, ModalBody, SIZE, ROLE} from "baseui/modal";
import {PaletteItem} from "../../selectable/PaletteItem/PaletteItem";
import {palettes} from "../../../config/palettes";
import {useThemeContext} from "../../../contexts/ThemeContext";

interface Props {}

export const PaletteModal: React.FC<Props> = () => {
	const {isPaletteModalOpen, setIsPaletteModalOpen} = useVisibilityContext()
	const {theme, setTheme} = useThemeContext()

	return (
		<Modal
			onClose={() => setIsPaletteModalOpen(false)}
			closeable
			isOpen={isPaletteModalOpen}
			animate
			autoFocus
			size={SIZE.default}
			role={ROLE.dialog}
		>
			<ModalHeader>Change the color palette</ModalHeader>
			<ModalBody $style={{display: "flex"}}>
				{
					palettes.map((palette, index) => {
						return (
							<div
								onClick={() => setTheme(
									{
										name: palette.name,
										mainColor: palette.mainColor,
										secondaryColor: palette.secondaryColor
									})}
							>
								<PaletteItem
									selected={theme.name === palette.name}
									name={palette.name}
									mainColor={palette.mainColor}
									secondaryColor={palette.secondaryColor}
									key={index}
								/>
							</div>

						)
					})
				}
			</ModalBody>
		</Modal>
	)
}