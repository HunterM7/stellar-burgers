import React from 'react'

// Files
import styles from './BurgerItem.module.scss'

// Yandex Components
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

type BurgerItemType = {
	img: string
	price: number
	title: string
}

const BurgerItem: React.FC<BurgerItemType> = ({
	img,
	price,
	title,
}) => {
	// Count of BurgerItem
	const [count, setCount] = React.useState<number>(0)

	return (
		<li className={styles.wrapper}>
			<img
				className={styles.img}
				src={img}
				alt='Ingredient'
			/>

			<div className={styles.price}>
				{price}
				<CurrencyIcon type='primary' />
			</div>

			<p className={styles.title}>{title}</p>

			{count ? (
				<Counter count={count} size='default' />
			) : null}
		</li>
	)
}

export default BurgerItem
