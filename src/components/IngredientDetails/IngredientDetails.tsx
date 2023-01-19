import React from 'react'

// Files
import { IngredientType } from '../../redux/actionTypes/types'

// Components
import Modal from '../Modal/Modal'

// Styles
import styles from './IngredientDetails.module.scss'

interface IngredientDetailsType {
  ingredient: IngredientType
  toggleModal: () => void
}

const IngredientDetails: React.FC<IngredientDetailsType> = ({
  ingredient,
  toggleModal,
}) => {
  // Nutrients
  const nutrientsInfo = [
    { title: 'Калории,ккал', value: ingredient.calories },
    { title: 'Белки, г', value: ingredient.proteins },
    { title: 'Жиры, г', value: ingredient.fat },
    { title: 'Углеводы, г', value: ingredient.carbohydrates },
  ]

  const nutrients = nutrientsInfo.map((item, i) => (
    <li key={i} className={styles.nutrients__item}>
      <p className={styles.nutrients__title}>{item.title}</p>
      <p className={styles.nutrients__quantity}>{item.value}</p>
    </li>
  ))

  return (
    <Modal title="Детали ингредиента" toggleModal={toggleModal}>
      <>
        <img
          className={styles.img}
          src={ingredient.image_large}
          alt={ingredient.name}
        />

        <h3 className={styles.title}>{ingredient.name}</h3>

        <ul className={styles.nutrients}>{nutrients}</ul>
      </>
    </Modal>
  )
}

export default IngredientDetails
