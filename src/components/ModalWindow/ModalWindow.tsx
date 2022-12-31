import React, { PropsWithChildren } from 'react'

// Files
import styles from './ModalWindow.module.scss'

// Yandex Components
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

interface ModalWindowType {
	handlePopup: () => void
	children?: any
}

const ModalWindow: React.FC<
	PropsWithChildren<ModalWindowType>
> = ({ handlePopup, children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.modal}>
				{children}

				<button className={styles.closeBtn}>
					<CloseIcon type='primary' onClick={handlePopup} />
				</button>
			</div>

			<div
				className={styles.bg}
				onClick={handlePopup}
			></div>
		</div>
	)
}

export default ModalWindow
