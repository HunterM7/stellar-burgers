import React from 'react'

// Files
import styles from './OrderInfo.module.scss'
import orderSVG from '../../assets/images/orderDoneSVG.svg'

// Components
import ModalWindow from '../ModalWindow/ModalWindow'

interface OrderInfoType {
	handlePopup: () => void
}

const OrderInfo: React.FC<OrderInfoType> = ({
	handlePopup,
}) => {
	return (
		<ModalWindow handlePopup={handlePopup}>
			<div className={styles.wrapper}>
				<p className={styles.orderId}>034536</p>
				<h3 className={styles.title}>
					идентификатор заказа
				</h3>
				<img
					className={styles.img}
					src={orderSVG}
					alt='Order'
				/>
				<p className={styles.subtitle}>
					Ваш заказ начали готовить
				</p>
				<p className={styles.desc}>
					Дождитесь готовности на орбитальной станции
				</p>
			</div>
		</ModalWindow>
	)
}

export default OrderInfo
