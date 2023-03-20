import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useSelector } from 'redux/store'
import { TIngredient } from 'redux/actionTypes'
import { cartSelector } from 'redux/selectors'

// DnD
import { useDrag } from 'react-dnd'

// Routes
import { INGREDIENT_LINK } from 'utils/data/constants'

// Styles
import styles from './BurgerItem.module.scss'

interface IBurgerItem {
  ingredient: TIngredient
}

const BurgerItem: React.FC<IBurgerItem> = ({ ingredient }) => {
  const location = useLocation()

  // Count of BurgerItem
  const { bun, ingredients } = useSelector(cartSelector)

  const count = React.useMemo(() => {
    return ingredient.type === 'bun'
      ? bun?._id === ingredient._id
        ? 2
        : 0
      : ingredients.filter(item => item._id === ingredient._id).length
  }, [ingredient, bun, ingredients])

  // DnD
  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag(() => ({
    type: 'INGREDIENT',
    item: { id: ingredient._id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <li
      className={classNames(
        styles.wrapper,
        isDragging && styles.wrapper_onDrag,
      )}
      ref={dragRef}
    >
      <Link
        to={`${INGREDIENT_LINK}/${ingredient._id}`}
        state={{ background: location }}
        className={styles.link}
      >
        <img
          ref={dragPreviewRef}
          src={ingredient.image}
          alt="Ingredient"
          className={styles.img}
        />

        <div className={styles.price}>
          {ingredient.price}
          <CurrencyIcon type="primary" />
        </div>

        <p className={styles.title}>{ingredient.name}</p>
      </Link>

      {!!count && <Counter count={count} size="default" />}
    </li>
  )
}

export default React.memo(BurgerItem)
