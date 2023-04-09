import React from 'react'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { userOrdersSelector } from 'redux/selectors'
import {
  startUserOrdersWSConnection,
  stopUserOrdersWSConnection,
} from 'redux/actionCreators'

// Utils
import { PROFILE_ORDERS_LINK, WS_USER_ORDERS } from 'utils/data/constants'
import { getCookie } from 'utils/cookie'

// Components
import { Loader } from 'ui'
import { OrderFeed } from 'components'

const OrderHistory: React.FC = () => {
  const dispatch = useDispatch()
  const accessToken = getCookie('accessToken') || ''
  const orders = useSelector(userOrdersSelector)

  React.useEffect(() => {
    dispatch(
      startUserOrdersWSConnection(`${WS_USER_ORDERS}?token=${accessToken}`),
    )

    return () => {
      dispatch(stopUserOrdersWSConnection())
    }
  }, [dispatch, accessToken])

  return (
    <>
      {!orders ? (
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
