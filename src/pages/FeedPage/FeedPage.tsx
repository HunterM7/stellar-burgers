import React from 'react'

// Redux
import { useDispatch } from 'redux/store'
import { startWSConnection } from 'redux/actionCreators'

const FeedPage: React.FC = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(startWSConnection())
  }, [dispatch])

  return <div>FeedPage</div>
}

export default React.memo(FeedPage)
