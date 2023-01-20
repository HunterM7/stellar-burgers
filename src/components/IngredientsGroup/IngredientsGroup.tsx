import React from 'react'

// Files
import { TIngredient } from '../../redux/actionTypes/types'

// Components
import BurgerItem from '../BurgerItem/BurgerItem'

// Styles
import styles from './IngredientsGroup.module.scss'

type IngredientsGroupType = {
  id: number
  title: string
  data: TIngredient[]
}

const IngredientsGroup: React.FC<IngredientsGroupType> = ({
  id,
  title,
  data,
}) => {
  // Items
  const items = data.map((item, i) => <BurgerItem key={i} ingredient={item} />)

  return (
    <li id={`ingredients-block-${id}`} className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>{items}</ul>
    </li>
  )
}

export default React.memo(IngredientsGroup)
