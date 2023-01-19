import React from 'react'
import { useSelector } from 'react-redux'

// Components
import Modal from '../Modal/Modal'

// Hooks

// Types
import { RootStateType, useAppDispatch } from '../../redux/store'
import { setOrder } from '../../redux/actions/orderAction'

// Files and other
import orderSVG from '../../assets/images/orderDoneSVG.svg'

// Styles
import styles from './OrderDetails.module.scss'

interface OrderInfoType {
  ingredients: string[]
  toggleModal: () => void
}

const OrderInfo: React.FC<OrderInfoType> = ({ ingredients, toggleModal }) => {
  // const [data, isLoading, hasError] = useFetchOrder(API_URL_ORDER, ingredients)

  const { orderInfo, isLoading, hasError } = useSelector(
    (store: RootStateType) => store.order,
  )

  const dispatch = useAppDispatch()

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
