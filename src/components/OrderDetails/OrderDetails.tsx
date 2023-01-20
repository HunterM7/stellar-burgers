import React from 'react'

// Components
import Modal from '../Modal/Modal'

// Hooks
import { useDispatch, useSelector } from '../../redux/store'

// Types
import { setOrder } from '../../redux/actions/orderActions'

// Files and other
import orderSVG from '../../assets/images/orderDoneSVG.svg'

// Styles
import styles from './OrderDetails.module.scss'

interface OrderInfoT {
  ingredients: string[]
  toggleModal: () => void
}

const OrderInfo: React.FC<OrderInfoT> = ({ ingredients, toggleModal }) => {
  // const [data, isLoading, hasError] = useFetchOrder(API_URL_ORDER, ingredients)

  const { orderInfo, isLoading, hasError } = useSelector((store) => store.order)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setOrder(ingredients))
  }, [dispatch, ingredients])

  return (
    <Modal toggleModal={toggleModal}>
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
