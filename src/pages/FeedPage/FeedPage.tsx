import React from 'react'
import classNames from 'classnames'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { startWSConnection } from 'redux/actionCreators'
import { webSocketSelector } from 'redux/selectors'
import { getIngredients } from 'redux/actions'

// Components
import { OrderFeed, OrderInfo } from 'components'

// Styles
import styles from './FeedPage.module.scss'

const FeedPage: React.FC = () => {
  const dispatch = useDispatch()

  const { orders } = useSelector(webSocketSelector)

  React.useEffect(() => {
    dispatch(getIngredients())
    dispatch(startWSConnection())
  }, [dispatch])

  return (
    <main className={classNames('container', styles.wrapper)}>
      {!orders.length ? (
        <h2>Loading</h2>
      ) : (
        <>
          <h2 className={styles.title}>Лента заказов</h2>
          <OrderFeed />
          <OrderInfo />
        </>
      )}
    </main>
  )
}

export default React.memo(FeedPage)
