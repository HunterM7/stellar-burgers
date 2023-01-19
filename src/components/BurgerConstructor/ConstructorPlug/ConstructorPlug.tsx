import React from 'react'

import styles from './ConstructorPlug.module.scss'

type ConstructorPlugType = {
  position?: 'top' | 'bottom'
  title: string
}

const ConstructorPlug: React.FC<ConstructorPlugType> = ({
  position,
  title,
}) => {
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

export default ConstructorPlug
