import React from 'react'

// Redux
import { IWSOrder } from 'redux/actionTypes'

// Components
import { OrderCard } from 'ui'

// Styles
import styles from './OrderFeed.module.scss'

interface IOrderFeed {
  orders: IWSOrder[]
  isStatusShown?: boolean
  modalPath: string
}

const OrderFeed: React.FC<IOrderFeed> = ({
  orders,
  isStatusShown = false,
  modalPath,
}) => {
  const orderList = React.useMemo(
    () =>
      orders
        .slice(0, 12)
        .map(el => (
          <OrderCard
            isStatusShown={isStatusShown}
            key={el._id}
            order={el}
            modalPath={modalPath}
          />
        )),
    [isStatusShown, modalPath, orders],
  )

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>{orderList}</ul>
    </section>
  )
}

export default React.memo(OrderFeed)
