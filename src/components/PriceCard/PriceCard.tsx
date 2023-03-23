import React from 'react'
import classNames from 'classnames'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { TIngredient } from 'redux/actionTypes'

// Utils
import { countPrice } from 'utils/countPrice'

// Styles
import styles from './PriceCard.module.scss'
import { sortIngredientsList } from 'utils/sortIngredientsList'

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

  if (price) totalPrice = price

  if (ingredients) totalPrice = countPrice(sortIngredientsList(ingredients))

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
