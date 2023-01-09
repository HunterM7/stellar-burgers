import React from 'react'
import { Link } from 'react-scroll'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

// Files
import { ingredientGroups } from '../../utils/ingredientGroups'

// Components
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup'

// Types
import { dataType } from '../../utils/types'

// Styles
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
      <Tab
        value={tab.title}
        active={currentTab === tab.title}
        onClick={setCurrentTab}>
        {tab.title}
      </Tab>
    </Link>
  ))

  // IngredientsGroups
  const IngredientsGroups = ingredientGroups.map((item, i) => (
    <IngredientsGroup
      key={++i}
      id={++i}
      title={item.title}
      data={data.filter((el) => el.type === item.type)}
    />
  ))

  return (
    <section className={styles.wrapper}>
      <div className={styles.tabs}>{tabList}</div>

      <div className={styles.ingredients}>
        <ul id="ingredients" className={styles.ingredients__list}>
          {IngredientsGroups}
        </ul>
      </div>
    </section>
  )
}

export default BurgerIngredients
