import React from 'react'

// Redux
import { IWSOrder } from 'redux/actionTypes'
import { dataIngreientsSelector } from 'redux/selectors'
import { useSelector } from 'redux/store'

// Components
import { OrderItemCardIngredients } from 'components'

// Styles
import styles from './OrderItemCard.module.scss'

interface IOrderItemCard {
  order: IWSOrder
}

const OrderItemCard: React.FC<IOrderItemCard> = ({ order }) => {
  const allIngredients = useSelector(dataIngreientsSelector)

  const currentIngredients = allIngredients.filter(el =>
    order.ingredients.includes(el._id),
  )

  const orderDate = new Date(order.createdAt)
  const currentDate = new Date()
  const differenceDate = currentDate.getDay() - orderDate.getDay()

  const date = (() => {
    switch (differenceDate) {
      case 0:
        return 'Сегодня'
      case 1:
        return 'Вчера'
      case 2:
        return '2 дня назад'

      default:
        return `0${orderDate.getDay()}.0${
          orderDate.getMonth() + 1
        }.${orderDate.getFullYear()}`
    }
  })()

  const time = `${orderDate.getHours()}:${
    orderDate.getMinutes() > 9 ? '' : 0
  }${orderDate.getMinutes()}`

  const displayDate = `${date}, ${time}`

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.suptitle}>#{order.number}</h4>

      <span className={styles.timing}>{displayDate}</span>

      <h3 className={styles.title}>{order.name}</h3>

      <div className={styles.footer}>
        <OrderItemCardIngredients ingredients={currentIngredients} />
      </div>
    </div>
  )
}

export default OrderItemCard
