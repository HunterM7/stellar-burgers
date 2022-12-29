import React from 'react'

// Files
import styles from './BurgerIngredients.module.scss'

// Yandex Components
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerItem from '../BurgerItem/BurgerItem'
import { data } from '../../utils/data'

const BurgerIngredients = () => {
	// Tabs
	const tabNames = ['Булки', 'Соусы', 'Начинки']
	const [current, setCurrent] = React.useState(tabNames[0])

	const tabList = tabNames.map((tab, i) => (
		<Tab
			key={i}
			value={tab}
			active={current === tab}
			onClick={setCurrent}
		>
			{tab}
		</Tab>
	))

	// Items
	const items = data.map((item) => {
		return (
			<BurgerItem img={item.image} price={item.price} title={item.name} />
		)
	})

	return (
		<section className={styles.wrapper}>
			<div className={styles.tabs}>{tabList}</div>

			<div className={styles.ingredients}>
				<h3 className={styles.subtitle}>{tabNames[0]}</h3>
				<ul className={styles.list}>{items}</ul>

				<h3 className={styles.subtitle}>{tabNames[1]}</h3>
				<ul className={styles.list}>{items}</ul>

				<h3 className={styles.subtitle}>{tabNames[2]}</h3>
				<ul className={styles.list}>{items}</ul>
			</div>
		</section>
	)
}

export default BurgerIngredients
