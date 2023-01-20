import React from 'react'
import { useSelector } from 'react-redux'

// Files
import { RootStateType } from '../../redux/store'

// Components
import Modal from '../Modal/Modal'

// Styles
import styles from './IngredientDetails.module.scss'

interface IngredientDetailsType {
  toggleModal: () => void
}

const IngredientDetails: React.FC<IngredientDetailsType> = ({
  toggleModal,
}) => {
  // Nutrients
  const { title, image, calories, proteins, fat, carbohydrates } = useSelector(
    (store: RootStateType) => store.ingredientDetails,
  )

  const nutrientsInfo = [
    { title: 'Калории,ккал', value: calories },
    { title: 'Белки, г', value: proteins },
    { title: 'Жиры, г', value: fat },
    { title: 'Углеводы, г', value: carbohydrates },
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
        <img className={styles.img} src={image} alt={title} />

        <h3 className={styles.title}>{title}</h3>

        <ul className={styles.nutrients}>{nutrients}</ul>
      </>
    </Modal>
  )
}

export default IngredientDetails
