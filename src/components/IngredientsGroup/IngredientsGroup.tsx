import React from 'react'

// Files
import { TIngredient } from 'redux/actionTypes'

// Components
import { BurgerItem } from 'components'

// Styles
import styles from './IngredientsGroup.module.scss'

type IngredientsGroupT = {
  id: string
  title: string
  data: TIngredient[]
}

const IngredientsGroup: React.FC<IngredientsGroupT> = ({ id, title, data }) => {
  // Ingredients
  const ingredients = React.useMemo(
    () => data.map((item, i) => <BurgerItem key={i} ingredient={item} />),
    [data],
  )

  return (
    <li id={id} className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>{ingredients}</ul>
    </li>
  )
}

export default React.memo(IngredientsGroup)
