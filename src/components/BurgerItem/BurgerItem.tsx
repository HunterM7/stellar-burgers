import React from 'react'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'
import { useDispatch, useSelector } from '../../redux/store'

// Files and other
import { TIngredient } from '../../redux/actionTypes/types'
import {
  setBun,
  setIngredient,
} from '../../redux/actionCreators/cartActionCreators'
import { setIngredientDetails } from '../../redux/actionCreators/IngredientDetailsCreators'

// Components
import IngredientDetails from '../IngredientDetails/IngredientDetails'

// Styles
import styles from './BurgerItem.module.scss'

interface BurgerItemT {
  ingredient: TIngredient
}

const BurgerItem: React.FC<BurgerItemT> = ({ ingredient }) => {
  // Count of BurgerItem
  const { bun, ingredients } = useSelector((store) => store.cart)

  const count =
    ingredient.type === 'bun'
      ? bun?._id === ingredient._id
        ? 2
        : 0
      : ingredients.filter((item) => item._id === ingredient._id).length

  // Modal Window
  const { isModalActive, toggleModal } = useModal(false)

  const dispatch = useDispatch()

  const handleClick = () => {
    toggleModal()

    dispatch(
      setIngredientDetails({
        title: ingredient.name,
        image: ingredient.image_large,
        calories: ingredient.calories,
        proteins: ingredient.proteins,
        fat: ingredient.fat,
        carbohydrates: ingredient.carbohydrates,
      }),
    )

    ingredient.type === 'bun'
      ? dispatch(setBun(ingredient))
      : dispatch(setIngredient({ ...ingredient, uuid: crypto.randomUUID() }))
  }

  return (
    <li className={styles.wrapper} onClick={handleClick}>
      <img src={ingredient.image} alt="Ingredient" className={styles.img} />

      <div className={styles.price}>
        {ingredient.price}
        <CurrencyIcon type="primary" />
      </div>

      <p className={styles.title}>{ingredient.name}</p>

      {count ? <Counter count={count} size="default" /> : null}

      {isModalActive && <IngredientDetails toggleModal={toggleModal} />}
    </li>
  )
}

export default React.memo(BurgerItem)
