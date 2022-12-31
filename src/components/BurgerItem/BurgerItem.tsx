import React from 'react'

// Files
import styles from './BurgerItem.module.scss'
import { dataType } from '../../utils/data'

// Yandex Components
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Components
import IngredientCard from '../IngredientCard/IngredientCard'

const BurgerItem: React.FC<dataType> = (data) => {
	// Count of BurgerItem
	const [count, setCount] = React.useState<number>(0)

	// Modal PopUp
	const [isPopupActive, setIsPopupActive] =
		React.useState<boolean>(false)

	const handlePopup = () => {
		setIsPopupActive((prev) => !prev)
	}

	return (
		<li className={styles.wrapper}>
			<img
				src={data.image}
				alt='Ingredient'
				className={styles.img}
				onClick={handlePopup}
			/>

			<div className={styles.price}>
				{data.price}
				<CurrencyIcon type='primary' />
			</div>

			<p className={styles.title}>{data.name}</p>

			{count ? (
				<Counter count={count} size='default' />
			) : null}

			{isPopupActive && (
				<IngredientCard
					data={data}
					handlePopup={handlePopup}
				/>
			)}
		</li>
	)
}

export default BurgerItem
