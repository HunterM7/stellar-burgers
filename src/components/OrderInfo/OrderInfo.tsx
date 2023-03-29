import classNames from 'classnames'
import React from 'react'

// Redux
import { useSelector } from 'redux/store'
import { webSocketSelector } from 'redux/selectors'

// Components
import { OrderCount } from 'components'

// Styles
import styles from './OrderInfo.module.scss'

const OrderInfo: React.FC = () => {
  const { total, totalToday, onworkOrders, doneOrders } =
    useSelector(webSocketSelector)

  const doneOrdersList = doneOrders?.slice(0, 12).map(id => (
    <li
      key={id}
      className={classNames(styles.orders__item, styles.orders__item_done)}
    >
      {id}
    </li>
  ))

  const onworkOrdersList = onworkOrders?.slice(0, 12).map(id => (
    <li key={id} className={styles.orders__item}>
      {id}
    </li>
  ))

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.orders}>
          <h3 className={styles.orders__title}>Готовы:</h3>

          <ul className={styles.orders__list}>{doneOrdersList}</ul>
        </div>

        <div className={styles.orders}>
          <h3 className={styles.orders__title}>В работе:</h3>

          <ul className={styles.orders__list}>{onworkOrdersList}</ul>
        </div>

        <div className={styles.allOrders}>
          <OrderCount title="Выполнено за все время:" count={total} />
        </div>

        <div className={styles.todayOrders}>
          <OrderCount title="Выполнено за сегодня:" count={totalToday} />
        </div>
      </div>
    </section>
  )
}

export default React.memo(OrderInfo)
