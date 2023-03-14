import React from 'react'
import { IWSOrder, TIngredient } from 'redux/actionTypes'

// Redux
import { useSelector } from 'redux/store'
import { dataIngreientsSelector } from 'redux/selectors'

// Utils
import { OrderStatus } from 'utils/data/constants'
import { dateConverter } from 'utils/dateConverter'
import { getIngredientsList } from 'utils/getIngredientsList'

// Components
import { PriceCard, OrderRow } from 'components'

// Styles
import styles from './OrderDetails.module.scss'

interface IOrderDetails {
  order: IWSOrder
}

const OrderDetails: React.FC<IOrderDetails> = ({
  order: { name, status, createdAt, ingredients },
}) => {
  // Order creation date
  const date = dateConverter(createdAt)

  // Ingredients List
  const allIngredients = useSelector(dataIngreientsSelector)

  const currentIngredients: TIngredient[] = getIngredientsList(
    ingredients,
    allIngredients,
  )

  const ingredientsList = [...new Set(currentIngredients)].map(ingredient => {
    const count =
      ingredient.type === 'bun'
        ? 2
        : currentIngredients.filter(el => el._id === ingredient._id).length

    return (
      <OrderRow count={count} ingredient={ingredient} key={ingredient._id} />
    )
  })

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{name}</h3>

      <p className={styles.status}>{OrderStatus[status]}</p>

      <h3 className={styles.composition}>Состав:</h3>

      <ul className={styles.ingredients}>{ingredientsList}</ul>

      <div className={styles.footer}>
        <span className={styles.timing}>{date}</span>

        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </div>
  )
}

export default React.memo(OrderDetails)
