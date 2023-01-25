import React from 'react'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// DnD
import { useDrag } from 'react-dnd'

// Hooks
import useModal from '../../hooks/useModal'
import { useDispatch, useSelector } from '../../redux/store'

// Files and other
import { TIngredient } from '../../redux/actionTypes/types'
import {
  resetIngredientDetails,
  setIngredientDetails,
} from '../../redux/actionCreators/IngredientDetailsCreators'

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
  const { isModalOpen, openModal, closeModal } = useModal(false)

  const handleCloseModal = () => {
    dispatch(resetIngredientDetails())
    closeModal()
  }

  // DnD
  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag(() => ({
    type: 'ingredient',
    item: { id: ingredient._id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  // Redux

  const dispatch = useDispatch()

  const handleItemClick = () => {
    openModal()

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
  }

  return (
    <li
      className={`
			${styles.wrapper}
			${isDragging ? styles['wrapper--onDrag'] : ''}
		`}
      ref={dragRef}
      onClick={handleItemClick}>
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

      {count ? <Counter count={count} size="default" /> : null}

      {isModalOpen && <IngredientDetails closeModal={handleCloseModal} />}
    </li>
  )
}

export default React.memo(BurgerItem)
