import React from 'react'
import { useSelector } from 'react-redux'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'
import { RootStateType, useAppDispatch } from '../../redux/store'

// Files and other
import { IngredientType } from '../../redux/actionTypes/types'
import {
  setBun,
  setIngredient,
} from '../../redux/actionCreators/cartActionCreators'

// Components
import IngredientDetails from '../IngredientDetails/IngredientDetails'

// Styles
import styles from './BurgerItem.module.scss'

interface BurgerItemType {
  ingredient: IngredientType
}

const BurgerItem: React.FC<BurgerItemType> = ({ ingredient }) => {
  // Count of BurgerItem
  const { bun, ingredients } = useSelector((store: RootStateType) => store.cart)

  const count =
    ingredient.type === 'bun'
      ? bun?._id === ingredient._id
        ? 2
        : 0
      : ingredients.filter((item) => item._id === ingredient._id).length

  // Modal Window
  const { isModalActive, toggleModal } = useModal(false)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    toggleModal()

    ingredient.type === 'bun'
      ? dispatch(setBun(ingredient))
      : dispatch(setIngredient(ingredient))
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

      {isModalActive && (
        <IngredientDetails ingredient={ingredient} toggleModal={toggleModal} />
      )}
    </li>
  )
}

export default React.memo(BurgerItem)
