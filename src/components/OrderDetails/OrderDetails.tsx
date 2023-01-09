import React from 'react'

// Components
import Modal from '../Modal/Modal'

// Files
import orderSVG from '../../assets/images/orderDoneSVG.svg'

// Styles
import styles from './OrderDetails.module.scss'

interface OrderInfoType {
  toggleModal: () => void
}

const OrderInfo: React.FC<OrderInfoType> = ({ toggleModal }) => {
  // eslint-disable-next-line
  const [orderId, setOrderId] = React.useState<string>('034536')

  return (
    <Modal toggleModal={toggleModal}>
      <>
        <p className={styles.orderId}>{orderId}</p>
        <h3 className={styles.title}>идентификатор заказа</h3>
        <img className={styles.img} src={orderSVG} alt="Order" />
        <p className={styles.subtitle}>Ваш заказ начали готовить</p>
        <p className={styles.desc}>
          Дождитесь готовности на орбитальной станции
        </p>
      </>
    </Modal>
  )
}

export default OrderInfo
