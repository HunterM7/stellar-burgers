import React from 'react'

// Types
import { dataType } from '../../utils/data'

// Files
import BurgerItem from '../BurgerItem/BurgerItem'

import styles from './IngredientsGroup.module.scss'

// Components

type IngredientsGroupType = {
  id: number
  title: string
  data: dataType[]
}

const IngredientsGroup: React.FC<IngredientsGroupType> = ({ id, title, data }) => {
  // Items
  const items = data.map((item, i) => <BurgerItem key={i} {...item} />)

  return (
    <li id={`ingredients-block-${id}`} className={styles.wrapper}>
      <h3 className={styles.subtitle}>{title}</h3>
      <ul className={styles.list}>{items}</ul>
    </li>
  )
}

export default IngredientsGroup
