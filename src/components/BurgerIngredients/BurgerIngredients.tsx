import React from 'react'
import { Link } from 'react-scroll'

// Yandex Components
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

// Data
import { ingredientGroups } from '../../utils/ingredientGroups'

// Components
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup'

// Types
import { dataType } from '../../utils/data'

// Files
import styles from './BurgerIngredients.module.scss'

interface BurgerIngredientsType {
  data: dataType[]
}

const BurgerIngredients: React.FC<BurgerIngredientsType> = ({ data }) => {
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

export default BurgerIngredients
