import * as React from 'react';
import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {Modal, ModalHeader, ModalBody, SIZE, ROLE} from "baseui/modal";
import {useVisibilityContext} from "../../../contexts/VisibilyContext";

interface Props {}

export const TipsModal: React.FC<Props> = () => {
	const {result, tips} = useCalculatorContext()
	const {isTipsModalOpen, setIsTipsModalOpen} = useVisibilityContext()

	return (
		<Modal
			onClose={() => setIsTipsModalOpen(false)}
			closeable
			isOpen={isTipsModalOpen}
			animate
			autoFocus
			size={SIZE.auto}
			role={ROLE.dialog}
		>
			<ModalHeader>Tips about the number {Math.round(Number(result))}</ModalHeader>
			<ModalBody>
					{tips}
			</ModalBody>
		</Modal>
	)
}