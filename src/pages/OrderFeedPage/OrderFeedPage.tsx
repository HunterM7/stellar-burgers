import React from 'react'

// Redux
import { useDispatch } from 'redux/store'
import { startWSConnection } from 'redux/actionCreators'

const OrderFeedPage: React.FC = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(startWSConnection())
  }, [dispatch])

  return <div>OrderFeedPage</div>
}

export default React.memo(OrderFeedPage)
