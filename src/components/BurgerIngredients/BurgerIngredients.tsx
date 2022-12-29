import React from 'react'
import { Link } from 'react-scroll'

// Files
import styles from './BurgerIngredients.module.scss'
import { data } from '../../utils/data'

// Yandex Components
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerItem from '../BurgerItem/BurgerItem'
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup'

const BurgerIngredients = () => {
	// Tabs
	const tabNames = ['Булки', 'Соусы', 'Начинки']
	const [current, setCurrent] = React.useState(tabNames[0])

	const tabList = tabNames.map((tab, i) => (
		<Link
			key={i}
			to={`ingredients-block-${++i}`}
			spy={true}
			smooth={true}
			duration={700}
			offset={-20}
			containerId='ingredients'
			onSetActive={() => setCurrent(tab)}
		>
			<Tab
				value={tab}
				active={current === tab}
				onClick={setCurrent}
			>
				{tab}
			</Tab>
		</Link>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.tabs}>{tabList}</div>

			<div className={styles.ingredients} id='ingredients'>
				<IngredientsGroup
					id={1}
					title={tabNames[0]}
					data={data.filter((el) => el.type === 'bun')}
				/>
				<IngredientsGroup
					id={2}
					title={tabNames[1]}
					data={data.filter((el) => el.type === 'sauce')}
				/>
				<IngredientsGroup
					id={3}
					title={tabNames[2]}
					data={data.filter((el) => el.type === 'main')}
				/>
			</div>
		</section>
	)
}

export default BurgerIngredients
