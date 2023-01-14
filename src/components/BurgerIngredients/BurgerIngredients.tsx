import React from 'react'
import { Link } from 'react-scroll'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

// Files
import { ingredientGroups } from '../../utils/ingredientGroups'
import { DataContext } from '../../context/dataContext'
import { dataType } from '../../utils/types'

// Components
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup'

// Styles
import styles from './BurgerIngredients.module.scss'

interface BurgerIngredientsType {
  dispatchBurgerState: React.Dispatch<{
    type: string
    payload: dataType
  }>
}

const BurgerIngredients: React.FC<BurgerIngredientsType> = ({
  dispatchBurgerState,
}) => {
  // Context
  const { data } = React.useContext(DataContext)

  // const { dispatchBurgerState } = React.useContext(BurgerContext)

  // Tabs
  const [currentTab, setCurrentTab] = React.useState<string>(
    ingredientGroups[0].title,
  )

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
      dispatchBurgerState={dispatchBurgerState}
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
