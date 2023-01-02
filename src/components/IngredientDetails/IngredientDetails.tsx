import React from 'react'

// Files
import styles from './IngredientDetails.module.scss'
import { dataType } from '../../utils/data'

// Components
import Modal from '../Modal/Modal'

interface IngredientDetailsType {
	data: dataType
	toggleModal: () => void
}

const IngredientDetails: React.FC<
	IngredientDetailsType
> = ({ data, toggleModal }) => {
	// Nutrients
	const nutrientsInfo = [
		{ title: 'Калории,ккал', data: data.calories },
		{ title: 'Белки, г', data: data.proteins },
		{ title: 'Жиры, г', data: data.fat },
		{ title: 'Углеводы, г', data: data.carbohydrates },
	]

	const nutrients = nutrientsInfo.map((item, i) => (
		<li key={i} className={styles.nutrients__item}>
			<p className={styles.nutrients__title}>
				{item.title}
			</p>
			<p className={styles.nutrients__quantity}>
				{item.data}
			</p>
		</li>
	))

	return (
		<Modal
			title='Детали ингредиента'
			toggleModal={toggleModal}
		>
			<>
				<img
					className={styles.img}
					src={data.image_large}
					alt={data.name}
				/>

				<h3 className={styles.title}>{data.name}</h3>

				<ul className={styles.nutrients}>{nutrients}</ul>
			</>
		</Modal>
	)
}

export default IngredientDetails
