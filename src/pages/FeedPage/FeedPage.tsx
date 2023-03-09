import React from 'react'
import classNames from 'classnames'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { startWSConnection } from 'redux/actionCreators'
import { webSocketSelector } from 'redux/selectors'

// Components
import { OrderFeed } from 'components'

// Styles
import styles from './FeedPage.module.scss'

const FeedPage: React.FC = () => {
  const dispatch = useDispatch()

  const { orders } = useSelector(webSocketSelector)

  React.useEffect(() => {
    dispatch(startWSConnection())
  }, [dispatch])

  return (
    <section className={classNames('container', styles.wrapper)}>
      {!orders.length ? (
        <h2>Loading</h2>
      ) : (
        <>
          <h2 className={styles.title}>Лента заказов</h2>
          <div className={styles.block}>
            <OrderFeed />
          </div>
          <div className={styles.block}></div>
        </>
      )}
    </section>
  )
}

export default React.memo(FeedPage)
