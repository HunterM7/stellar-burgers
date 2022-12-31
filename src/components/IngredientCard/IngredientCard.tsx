import React from 'react'

// Files
import styles from './IngredientCard.module.scss'
import { dataType } from '../../utils/data'

// Yandex Components
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Components
import ModalWindow from '../ModalWindow/ModalWindow'

interface IngredientCardType {
	data: dataType
	handlePopup: () => void
}

const IngredientCard: React.FC<IngredientCardType> = ({
	data,
	handlePopup,
}) => {
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
		<ModalWindow handlePopup={handlePopup}>
			<div className={styles.wrapper}>
				<h2 className={styles.heading}>
					Детали ингредиента
				</h2>

				<div className={styles.content}>
					<img
						className={styles.img}
						src={data.image_large}
						alt={data.name}
					/>

					<h3 className={styles.title}>{data.name}</h3>

					<ul className={styles.nutrients}>{nutrients}</ul>
				</div>
			</div>
		</ModalWindow>
	)
}

export default IngredientCard
