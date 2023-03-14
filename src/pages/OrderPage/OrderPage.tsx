import React from 'react'
import classNames from 'classnames'
import { useParams } from 'react-router-dom'

// Redux
import { IWSOrder } from 'redux/actionTypes'
import { useDispatch } from 'redux/store'
import { getIngredients } from 'redux/actions'

// Utils
import { customFetch } from 'utils/api/customFetch'
import { API_URL_ORDERS } from 'utils/data/constants'

// Components
import { Loader, OrderDetails } from 'components'

// Styles
import styles from './OrderPage.module.scss'

interface IOrderFetch {
  success: boolean
  orders: IWSOrder[]
}

interface IOrderState {
  isLoading: boolean
  hasError: boolean
  order: IWSOrder | null
}

const OrderPage = () => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()

  // Order
  const initialState: IOrderState = {
    isLoading: true,
    hasError: false,
    order: null,
  }

  const [{ isLoading, hasError, order }, setOrder] =
    React.useState<IOrderState>(initialState)

  React.useEffect(() => {
    dispatch(getIngredients())

    customFetch<IOrderFetch>(`${API_URL_ORDERS}/${id}`).then(res => {
      if (res.success) {
        setOrder(prev => ({
          ...prev,
          isLoading: false,
          order: res.orders[0],
        }))
      } else {
        setOrder({ isLoading: false, hasError: true, order: null })
      }
    })
  }, [dispatch, id])

  return (
    <main className={classNames('container', styles.wrapper)}>
      {isLoading && <Loader />}

      {hasError && <h1>Что-то пошло не так...</h1>}

      {order && <OrderDetails order={order} />}
    </main>
  )
}

export default OrderPage
