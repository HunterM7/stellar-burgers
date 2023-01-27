import React from 'react'

// Components
import Modal from '../Modal/Modal'

// Hooks
import { useSelector } from '../../redux/store'

// Files and other
import orderSVG from '../../assets/images/orderDoneSVG.svg'
import { orderSelector } from '../../redux/selectors/orderSelector'

// Styles
import styles from './OrderDetails.module.scss'

interface OrderInfoT {
  closeModal: () => void
}

const OrderInfo: React.FC<OrderInfoT> = ({ closeModal }) => {
  const { orderInfo, isLoading, hasError } = useSelector(orderSelector)

  return (
    <Modal closeFunc={closeModal}>
      {hasError ? (
        <h2>Что-то пошло не так</h2>
      ) : (
        <>
          <p className={styles.orderId}>
            {isLoading ? '######' : orderInfo.order}
          </p>
          <h3 className={styles.title}>{orderInfo.name}</h3>
          <img className={styles.img} src={orderSVG} alt="Order" />
          <p className={styles.subtitle}>Ваш заказ начали готовить</p>
          <p className={styles.desc}>
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </Modal>
  )
}

export default OrderInfo
