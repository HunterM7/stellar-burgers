import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Redux
import { IWSOrder } from 'redux/actionTypes'
import { useSelector } from 'redux/store'
import { dataIngreientsSelector } from 'redux/selectors'

// Utils
import { ORDER_FEED_LINK } from 'utils/data/constants'
import { dateConverter } from 'utils/dateConverter'
import { getIngredientsList } from 'utils/getIngredientsList'

// Components
import { OrderCardList, PriceCard } from 'components'

// Styles
import styles from './OrderCard.module.scss'

interface IOrderCard {
  order: IWSOrder
}

const OrderCard: React.FC<IOrderCard> = ({ order }) => {
  const location = useLocation()
  const allIngredients = useSelector(dataIngreientsSelector)

  const uniqIngredients = allIngredients.filter(el =>
    order.ingredients.includes(el._id),
  )

  const currentIngredients = getIngredientsList(
    order.ingredients,
    allIngredients,
  )

  // Date
  const displayedDate = dateConverter(order.createdAt)

  return (
    <Link
      className={styles.wrapper}
      state={{ background: location }}
      to={`${ORDER_FEED_LINK}/${order.number}`}
    >
      <div className={styles.header}>
        <h4 className={styles.suptitle}>#{order.number}</h4>

        <span className={styles.timing}>{displayedDate}</span>
      </div>

      <h3 className={styles.title}>{order.name}</h3>

      <div className={styles.footer}>
        <OrderCardList ingredients={uniqIngredients} />
        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </Link>
  )
}

export default OrderCard
