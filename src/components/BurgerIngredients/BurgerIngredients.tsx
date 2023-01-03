import React from 'react'
import { Link } from 'react-scroll'

// Files & Data
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import { data } from '../../utils/data'
import { ingredientGroups } from '../../utils/ingredientGroups'

// Yandex Components

// Components
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup'

import styles from './BurgerIngredients.module.scss'

const Ingredients = () => {
  // Tabs
  const [currentTab, setCurrentTab] = React.useState<string>('')

  const tabList = ingredientGroups.map((tab, i) => (
    <Link
      key={i}
      to={`ingredients-block-${++i}`}
      spy={true}
      smooth={true}
      duration={700}
      offset={-20}
      containerId="ingredients"
      onSetActive={() => setCurrentTab(tab.title)}>
      <Tab value={tab.title} active={currentTab === tab.title} onClick={setCurrentTab}>
        {tab.title}
      </Tab>
    </Link>
  ))

  // IngredientsGroups
  const IngredientsGroups = ingredientGroups.map((item) => (
    <IngredientsGroup
      key={item.id}
      id={item.id}
      title={item.title}
      data={data.filter((el) => el.type === item.type)}
    />
  ))

  return (
    <section className={styles.wrapper}>
      <div className={styles.tabs}>{tabList}</div>

      <ul id="ingredients" className={styles.ingredients}>
        {IngredientsGroups}
      </ul>
    </section>
  )
}

export default Ingredients
