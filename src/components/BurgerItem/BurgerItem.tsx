import React from 'react'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// DnD
import { useDrag } from 'react-dnd'

// Hooks
import useModal from 'hooks/useModal'
import { useDispatch, useSelector } from 'redux/store'

// Files and other
import { TIngredient } from 'redux/actionTypes'
import {
  resetIngredientDetails,
  setIngredientDetails,
} from 'redux/actionCreators'
import { cartSelector } from 'redux/selectors'

// Components
import { IngredientDetails } from 'components'

// Styles
import styles from './BurgerItem.module.scss'

interface BurgerItemT {
  ingredient: TIngredient
}

const BurgerItem: React.FC<BurgerItemT> = ({ ingredient }) => {
  const dispatch = useDispatch()

  // Count of BurgerItem
  const { bun, ingredients } = useSelector(cartSelector)

  const count = React.useMemo(() => {
    return ingredient.type === 'bun'
      ? bun?._id === ingredient._id
        ? 2
        : 0
      : ingredients.filter((item) => item._id === ingredient._id).length
  }, [ingredient, bun, ingredients])

  // DnD
  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag(() => ({
    type: 'INGREDIENT',
    item: { id: ingredient._id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  // Modal Window
  const { isModalOpen, openModal, closeModal } = useModal(false)

  const handleCloseModal = React.useCallback(() => {
    dispatch(resetIngredientDetails())
    closeModal()
  }, [dispatch, closeModal])

  // Redux
  const handleItemClick = React.useCallback(() => {
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
  }, [openModal, dispatch, ingredient])

  return (
    <li
      className={`
			${styles.wrapper}
			${isDragging ? styles['wrapper--onDrag'] : ''}
		`}
      ref={dragRef}
      onClick={handleItemClick}
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

      {count ? <Counter count={count} size="default" /> : null}

      {isModalOpen && <IngredientDetails closeModal={handleCloseModal} />}
    </li>
  )
}

export default React.memo(BurgerItem)
