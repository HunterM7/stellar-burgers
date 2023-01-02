import React from 'react'

// Hooks
import useModal from '../../hooks/useModal'

// Files
import styles from './BurgerItem.module.scss'
import { dataType } from '../../utils/data'

// Yandex Components
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Components
import IngredientDetails from '../IngredientDetails/IngredientDetails'

const BurgerItem: React.FC<dataType> = (data) => {
	// Count of BurgerItem
	const [count, setCount] = React.useState<number>(0)

	// Modal Window
	const { isModalActive, toggleModal } = useModal(false)

	return (
		<>
			<li className={styles.wrapper} onClick={toggleModal}>
				<img
					src={data.image}
					alt='Ingredient'
					className={styles.img}
				/>

				<div className={styles.price}>
					{data.price}
					<CurrencyIcon type='primary' />
				</div>

				<p className={styles.title}>{data.name}</p>

				{count ? (
					<Counter count={count} size='default' />
				) : null}
			</li>

			{isModalActive && (
				<IngredientDetails
					data={data}
					toggleModal={toggleModal}
				/>
			)}
		</>
	)
}

export default BurgerItem
