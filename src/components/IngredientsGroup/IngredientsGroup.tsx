import React from 'react'

// Types
import { dataType } from '../../utils/data'

// Files
import styles from './IngredientsGroup.module.scss'

// Components
import BurgerItem from '../BurgerItem/BurgerItem'

type IngredientsGroupType = {
	id: number
	title: string
	data: dataType[]
}

const IngredientsGroup: React.FC<IngredientsGroupType> = ({
	id,
	title,
	data,
}) => {

	// Items
	const items = data.map((item) => (
		<BurgerItem
			key={item._id}
			img={item.image}
			price={item.price}
			title={item.name}
		/>
	))

	return (
		<li
			id={`ingredients-block-${id}`}
			className={styles.wrapper}
		>
			<h3 className={styles.subtitle}>{title}</h3>
			<ul className={styles.list}>{items}</ul>
		</li>
	)
}

export default IngredientsGroup
