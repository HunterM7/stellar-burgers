import React from 'react'

// Components
import { Loader, OrderFeed } from 'components'
import { useDispatch, useSelector } from 'redux/store'
import { getIngredients } from 'redux/actions'
import {
  startUserOrdersWSConnection,
  stopUserOrdersWSConnection,
} from 'redux/actionCreators'
import { userOrdersSelector } from 'redux/selectors/userOrdersWSSelectors'
import { PROFILE_ORDERS_LINK, WS_USER_ORDERS } from 'utils/data/constants'

const OrderHistory: React.FC = () => {
  const dispatch = useDispatch()
  const orders = useSelector(userOrdersSelector)

  React.useEffect(() => {
    dispatch(getIngredients())
    dispatch(startUserOrdersWSConnection(WS_USER_ORDERS))

    return () => {
      dispatch(stopUserOrdersWSConnection())
    }
  }, [dispatch])

  return (
    <>
      {!orders.length ? (
        <Loader />
      ) : (
        <OrderFeed
          orders={[...orders].reverse()}
          isStatusShown
          modalPath={PROFILE_ORDERS_LINK}
        />
      )}
    </>
  )
}

export default React.memo(OrderHistory)
