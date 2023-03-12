import React from 'react'
import classNames from 'classnames'
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { getIngredients } from 'redux/actions'
import { startWSConnection } from 'redux/actionCreators'
import {
  webSocketErrorSelector,
  webSocketIsConnectedSelector,
  webSocketOrdersSelector,
} from 'redux/selectors'

// Components
import { Loader, OrderDetails } from 'components'

// Styles
import styles from './OrderPage.module.scss'

const OrderPage = () => {
  const { id = '' } = useParams()
  const dispatch = useDispatch()
  const allOrders = useSelector(webSocketOrdersSelector)
  const isWSConnected = useSelector(webSocketIsConnectedSelector)
  const hasWSError = useSelector(webSocketErrorSelector)

  const currentOrder = allOrders.find(el => el.number === +id)

  React.useEffect(() => {
    dispatch(getIngredients())
    dispatch(startWSConnection())
  }, [dispatch])

  return (
    <main className={classNames('container', styles.wrapper)}>
      {!isWSConnected || !currentOrder ? (
        <Loader />
      ) : hasWSError ? (
        <h1>Что-то пошло не так...</h1>
      ) : (
        <OrderDetails order={currentOrder} />
      )}
    </main>
  )
}

export default OrderPage
