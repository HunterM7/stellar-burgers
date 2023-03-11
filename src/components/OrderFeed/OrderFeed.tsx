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

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {orders.slice(0, 12).map(el => (
          <OrderCard key={el._id} order={el} />
        ))}
      </ul>
    </section>
  )
}

export default React.memo(OrderFeed)
