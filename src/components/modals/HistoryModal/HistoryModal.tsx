import * as React from 'react';
import "./HistoryModal.css";

import {useCalculatorContext} from "../../../contexts/CalculatorContext";
import {useVisibilityContext} from "../../../contexts/VisibilyContext";

import {Modal, ModalHeader, ModalBody, SIZE, ROLE} from "baseui/modal";

interface Props {}

export const HistoryModal: React.FC<Props> = () => {
	const {history, setCalcul, setReadableCalcul, setResult,} = useCalculatorContext()
	const {isHistoryModalOpen, setIsHistoryModalOpen} = useVisibilityContext()

	const handleHistoryItem = (calcul: string, readableCalcul: string, result: string) => {
		setCalcul(calcul)
		setReadableCalcul(readableCalcul)
		setResult(result)
		setIsHistoryModalOpen(false)
	}

	return (
		<Modal
			onClose={() => setIsHistoryModalOpen(false)}
			closeable
			isOpen={isHistoryModalOpen}
			animate
			autoFocus
			size={SIZE.default}
			role={ROLE.dialog}
		>
			<ModalHeader>History</ModalHeader>
			<ModalBody>
				<ul>
					{history.map((historyItem, index) => (
						<li key={index}
							className={"historyItem"}
							onClick={() => handleHistoryItem(
								historyItem.calcul,
								historyItem.readableCalcul,
								historyItem.result
							)}
						>
							{historyItem.readableCalcul} = {historyItem.result}
						</li>
					))}
				</ul>
			</ModalBody>
		</Modal>
	)
}