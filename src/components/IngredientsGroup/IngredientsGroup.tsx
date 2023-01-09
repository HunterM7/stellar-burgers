import React from 'react'

// Files
import { dataType } from '../../utils/types'

// Components
import BurgerItem from '../BurgerItem/BurgerItem'

// Styles
import styles from './IngredientsGroup.module.scss'

type IngredientsGroupType = {
  id: number
  title: string
  data: dataType[]
}

const IngredientsGroup: React.FC<IngredientsGroupType> = ({
  id,
  title,
  data,
}) => {
  // Items
  const items = data
    ? data.map((item, i) => <BurgerItem key={i} {...item} />)
    : data

  return (
    <li id={`ingredients-block-${id}`} className={styles.wrapper}>
      <h3 className={styles.subtitle}>{title}</h3>
      <ul className={styles.list}>{items}</ul>
    </li>
  )
}

export default IngredientsGroup
