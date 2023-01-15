import React from 'react'

// Components
import Modal from '../Modal/Modal'

// Hooks
import useFetchOrder from '../../hooks/useFetchOrder'

// Files
import orderSVG from '../../assets/images/orderDoneSVG.svg'

// Styles
import styles from './OrderDetails.module.scss'

interface OrderInfoType {
  ingredients: string[]
  toggleModal: () => void
}

const OrderInfo: React.FC<OrderInfoType> = ({ ingredients, toggleModal }) => {
  const url = 'https://norma.nomoreparties.space/api/orders'

  const [data, isLoading, hasError] = useFetchOrder(url, ingredients)

  return (
    <Modal toggleModal={toggleModal}>
      {hasError ? (
        <h2>Что-то пошло не так</h2>
      ) : (
        <>
          <p className={styles.orderId}>{isLoading ? '######' : data.order}</p>
          <h3 className={styles.title}>{data.name}</h3>
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
