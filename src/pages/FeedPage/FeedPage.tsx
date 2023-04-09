import React from 'react'
import classNames from 'classnames'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { webSocketSelector } from 'redux/selectors'
import {
  startAllOrdersWSConnection,
  stopAllOrdersWSConnection,
} from 'redux/actionCreators'
import { ORDER_FEED_LINK, WS_ALL_ORDERS } from 'utils/data/constants'

// Components
import { Loader } from 'ui'
import { OrderFeed, OrderInfo } from 'components'

// Styles
import styles from './FeedPage.module.scss'

const FeedPage: React.FC = () => {
  const dispatch = useDispatch()

  const { orders } = useSelector(webSocketSelector)

  React.useEffect(() => {
    dispatch(startAllOrdersWSConnection(WS_ALL_ORDERS))

    return () => {
      dispatch(stopAllOrdersWSConnection())
    }
  }, [dispatch])

  return (
    <main className={classNames('container', styles.wrapper)}>
      {!orders ? (
        <Loader />
      ) : (
        <>
          <h2 className={styles.title}>Лента заказов</h2>
          <OrderFeed orders={orders} modalPath={ORDER_FEED_LINK} />
          <OrderInfo />
        </>
      )}
    </main>
  )
}

export default React.memo(FeedPage)
