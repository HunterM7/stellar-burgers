import React from 'react'

// Components
import { Loader, OrderFeed } from 'components'
import { webSocketSelector } from 'redux/selectors'
import { useDispatch, useSelector } from 'redux/store'
import { getIngredients } from 'redux/actions'
import { startWSConnection } from 'redux/actionCreators'

const OrderHistory: React.FC = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(webSocketSelector)

  React.useEffect(() => {
    dispatch(getIngredients())
    dispatch(startWSConnection())
  }, [dispatch])

  return (
    <>
      {!orders.length ? (
        <Loader />
      ) : (
        <OrderFeed orders={orders} isStatusShown />
      )}
    </>
  )
}

export default React.memo(OrderHistory)
