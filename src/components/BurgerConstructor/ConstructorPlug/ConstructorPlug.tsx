import React from 'react'

// Styles
import styles from './ConstructorPlug.module.scss'

type ConstructorPlugT = {
  title: string
  position?: 'top' | 'bottom'
}

const ConstructorPlug: React.FC<ConstructorPlugT> = ({ title, position }) => {
  return (
    <div
      className={`
				${styles.wrapper}
				${position ? styles[position] : ''}
			`}
    >
      {title}
    </div>
  )
}

export default React.memo(ConstructorPlug)
