import React from 'react'

// Files
import styles from './BurgerItem.module.scss'

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
	return (
		<li className={styles.wrapper}>
			<img
				className={styles.img}
				src={img}
				alt='Ingredient'
			/>
			<div className={styles.price}>{price}</div>
			<p className={styles.title}>{title}</p>
		</li>
	)
}

export default BurgerItem
