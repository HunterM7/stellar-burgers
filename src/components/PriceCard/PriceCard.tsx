import React from 'react'
import classNames from 'classnames'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { TIngredient } from 'redux/actionTypes'

// Styles
import styles from './PriceCard.module.scss'

interface IPriceCard {
  ingredients: TIngredient[]
  size: 'small' | 'medium'
}

const PriceCard: React.FC<IPriceCard> = ({ size, ingredients }) => {
  const totalPrice = ingredients.reduce(
    (sum, el) => (el.type === 'bun' ? sum + el.price * 2 : sum + el.price),
    0,
  )

  return (
    <div className={classNames(styles.price, styles[size])}>
      <span>{totalPrice}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

export default React.memo(PriceCard)
