import React from 'react'
import classNames from 'classnames'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { TIngredient } from 'redux/actionTypes'

// Styles
import styles from './PriceCard.module.scss'

interface IPriceCard {
  ingredients?: TIngredient[]
  price?: number
  size?: 'small' | 'medium'
  prefix?: number
}

const PriceCard: React.FC<IPriceCard> = ({
  ingredients,
  price,
  size = 'small',
  prefix,
}) => {
  let totalPrice = 0

  if (ingredients) {
    const bun = ingredients.find(el => el.type === 'bun')
    const ingredientsList = ingredients.filter(el => el.type !== 'bun')
    const totalIngredientsList = [bun, ...ingredientsList, bun]

    totalPrice = totalIngredientsList.reduce(
      (sum, el) => sum + (el ? el.price : 0),
      0,
    )
  }

  if (price) totalPrice = price

  return (
    <div className={classNames(styles.price, styles[size])}>
      <span>
        {prefix && `${prefix} x `}
        {totalPrice}
      </span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

export default React.memo(PriceCard)
