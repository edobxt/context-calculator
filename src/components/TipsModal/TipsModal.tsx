import * as React from 'react';
import {useCalculatorContext} from "../../contexts/CalculatorContext";
import {
	Modal,
	ModalHeader,
	ModalBody,
	SIZE,
	ROLE
} from "baseui/modal";

interface Props {
}

export const TipsModal: React.FC<Props> = () => {
	const {isOpen, setIsOpen, result, tips} = useCalculatorContext()

	return (
		<Modal
			onClose={() => setIsOpen(false)}
			closeable
			isOpen={isOpen}
			animate
			autoFocus
			size={SIZE.default}
			role={ROLE.dialog}
		>
			<ModalHeader>Tips about the number {result}</ModalHeader>
			<ModalBody>
				{tips}
			</ModalBody>
		</Modal>
	)
}