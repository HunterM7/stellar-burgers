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
import styles from './IngredientCard.module.scss'

interface IIngredientCard {
  ingredient: TIngredient
}

const IngredientCard: React.FC<IIngredientCard> = ({ ingredient }) => {
  const location = useLocation()

  // Count of IngredientCard
  const { bun, ingredients } = useSelector(cartSelector)

  const count = React.useMemo(() => {
    if (ingredient.type === 'bun') {
      return bun?._id === ingredient._id ? 2 : 0
    } else {
      if (!ingredients) return 0

      return ingredients.filter(item => item._id === ingredient._id).length
    }
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

export default React.memo(IngredientCard)
