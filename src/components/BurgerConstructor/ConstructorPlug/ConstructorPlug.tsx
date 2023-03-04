import React from 'react'
import classNames from 'classnames'

// Styles
import styles from './ConstructorPlug.module.scss'

type ConstructorPlugT = {
  title: string
  position?: 'top' | 'bottom'
}

const ConstructorPlug: React.FC<ConstructorPlugT> = ({ title, position }) => {
  return (
    <p className={classNames(styles.wrapper, position && styles[position])}>
      {title}
    </p>
  )
}

export default React.memo(ConstructorPlug)
