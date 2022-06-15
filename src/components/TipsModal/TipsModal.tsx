import * as React from 'react';
import {useCalculatorContext} from "../../contexts/CalculatorContext";
import {
	Modal,
	ModalHeader,
	ModalBody,
	SIZE,
	ROLE
} from "baseui/modal";

interface Props {}

export const TipsModal: React.FC<Props> = () => {
	const {isTipsModalOpen, setIsTipsModalOpen, result, tips, setTips} = useCalculatorContext()

	return (
		<Modal
			onClose={() => setIsTipsModalOpen(false)}
			closeable
			isOpen={isTipsModalOpen}
			animate
			autoFocus
			size={SIZE.default}
			role={ROLE.dialog}
		>
			<ModalHeader>Tips about the number {Math.round(Number(result))}</ModalHeader>
			<ModalBody>
				{tips}
			</ModalBody>
		</Modal>
	)
}