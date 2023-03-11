import React from 'react'

// Redux
import { useSelector } from 'redux/store'
import { webSocketOrdersSelector } from 'redux/selectors'

// Components
import { OrderCard } from 'components'

// Styles
import styles from './OrderFeed.module.scss'

const OrderFeed: React.FC = () => {
  const orders = useSelector(webSocketOrdersSelector)

  const orderList = React.useMemo(
    () => orders.slice(0, 12).map(el => <OrderCard key={el._id} order={el} />),
    [orders],
  )

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>{orderList}</ul>
    </section>
  )
}

export default React.memo(OrderFeed)
