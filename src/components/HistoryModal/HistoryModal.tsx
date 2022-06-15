import * as React from 'react';
import {useCalculatorContext} from "../../contexts/CalculatorContext";
import "./HistoryModal.css";
import {
	Modal,
	ModalHeader,
	ModalBody,
	SIZE,
	ROLE
} from "baseui/modal";
import axios from "axios";

interface Props {
}

export const HistoryModal: React.FC<Props> = () => {
	const {isHistoryModalOpen,
		setIsHistoryModalOpen,
		history,
		setCalcul,
		setReadableCalcul,
		setResult,
		result,
		setTips
	} = useCalculatorContext()

	const getTips = (number: number) => {
		if (String(result) !== String(number)) {
			console.log(result)
			console.log(number)
			axios.get(`http://numbersapi.com/${number}`)
				.then(res => {
					setTips(res.data)
					console.log(res.data)
				})
		}
	}

	const handleHistoryItem = (calcul: string, readableCalcul: string, result: string) => {
		setCalcul(calcul)
		setReadableCalcul(readableCalcul)
		setResult(result)
		setIsHistoryModalOpen(false)
		getTips(Math.round(Number(result)))
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