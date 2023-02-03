import React from 'react'

// Files
import { TIngredient } from 'redux/actionTypes'

// Components
import { BurgerItem } from 'components'

// Styles
import styles from './IngredientsGroup.module.scss'

type IngredientsGroupT = {
  id: number
  title: string
  data: TIngredient[]
}

const IngredientsGroup: React.FC<IngredientsGroupT> = ({ id, title, data }) => {
  // Ingredients
  const items = React.useMemo(
    () => data.map((item, i) => <BurgerItem key={i} ingredient={item} />),
    [data],
  )

  return (
    <li id={`ingredients-block-${id}`} className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>{items}</ul>
    </li>
  )
}

export default React.memo(IngredientsGroup)
