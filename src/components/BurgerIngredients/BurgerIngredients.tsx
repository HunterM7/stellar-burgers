import React from 'react'
import { Link } from 'react-scroll'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

// Types
import { useSelector } from '../../redux/store'

// Files
import { ingredientGroups } from '../../utils/ingredientGroups'
import { dataIngreientsSelector } from '../../redux/selectors/dataSelector'

// Components
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup'

// Styles
import styles from './BurgerIngredients.module.scss'

const BurgerIngredients: React.FC = () => {
  const ingredients = useSelector(dataIngreientsSelector)

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
      onSetActive={() => setCurrentTab(tab.title)}
    >
      {/* Компонент <Tab> требует передачи функции в onClick.
			Клик у меня обрабатывается в обертке <Link>,
			поэтому необходимости в обработке клика по <Tab> не требуется.
			eslint-disable-next-line
			@ts-ignore */}
      <Tab value={tab.title} active={currentTab === tab.title}>
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
      data={ingredients.filter((el) => el.type === item.type)}
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

export default React.memo(BurgerIngredients)
