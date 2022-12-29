import React from 'react'

// Files
import styles from './IngredientsGroup.module.scss'

// Components
import BurgerItem from '../BurgerItem/BurgerItem'

type IngredientsGroupType = {
	id: number
	title: string
	data: any[]
}

const IngredientsGroup: React.FC<IngredientsGroupType> = ({
	id,
	title,
	data,
}) => {
	// Items
	const items = data.map((item) => {
		return (
			<BurgerItem
				key={item._id}
				img={item.image}
				price={item.price}
				title={item.name}
			/>
		)
	})

	return (
		<div
			id={`ingredients-block-${id}`}
			className={styles.ingredients__block}
		>
			<h3 className={styles.subtitle}>{title}</h3>
			<ul className={styles.list}>{items}</ul>
		</div>
	)
}

export default IngredientsGroup
