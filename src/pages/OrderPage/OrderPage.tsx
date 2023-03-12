import React from 'react'
import classNames from 'classnames'
import { useParams } from 'react-router-dom'

// Redux
import { useSelector } from 'redux/store'
import { webSocketOrdersSelector } from 'redux/selectors'

// Components
import { OrderDetails } from 'components'

// Styles
import styles from './OrderPage.module.scss'

const OrderPage = () => {
  const { id = '' } = useParams()
  const allOrders = useSelector(webSocketOrdersSelector)

  const currentOrder = allOrders.find(el => el.number === +id)

  return (
    <div className={classNames('container', styles.wrapper)}>
      {currentOrder ? (
        <OrderDetails order={currentOrder} />
      ) : (
        <h1>Что-то пошло не так...</h1>
      )}
    </div>
  )
}

export default OrderPage
