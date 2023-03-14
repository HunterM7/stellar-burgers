import React from 'react'

// Components
import { Modal } from 'components'

// Redux
import { useSelector } from 'redux/store'
import { orderSelector } from 'redux/selectors'

// Files and other
import orderSVG from 'assets/images/orderDoneSVG.svg'

// Styles
import styles from './OrderSummary.module.scss'

const OrderSummary: React.FC = () => {
  const { orderInfo, isLoading, hasError } = useSelector(orderSelector)

  return (
    <Modal>
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

export default React.memo(OrderSummary)
