// Redux
import { useSelector } from 'redux/store'
import { webSocketOrdersSelector } from 'redux/selectors'

// Components
import { OrderItemCard } from 'components'

// Styles
import styles from './OrderFeed.module.scss'

const OrderFeed = () => {
  const orders = useSelector(webSocketOrdersSelector)

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {orders.slice(0, 10).map(el => (
          <OrderItemCard key={el._id} order={el} />
        ))}
      </ul>
    </div>
  )
}

export default OrderFeed
