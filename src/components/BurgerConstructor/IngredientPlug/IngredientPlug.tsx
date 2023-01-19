import React from 'react'

import styles from './IngredientPlug.module.scss'

type IngredientPlugType = {
  position?: 'top' | 'bottom'
  title: string
}

const IngredientPlug: React.FC<IngredientPlugType> = ({ position, title }) => {
  return (
    <div
      className={`
		${styles.wrapper}
		${position ? styles[position] : ''}
	`}>
      {title}
    </div>
  )
}

export default IngredientPlug
