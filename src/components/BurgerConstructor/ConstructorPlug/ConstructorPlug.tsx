import React from 'react'
import classNames from 'classnames'

// Styles
import styles from './ConstructorPlug.module.scss'

type ConstructorPlugT = {
  title: string
  position?: 'top' | 'bottom'
}

const ConstructorPlug: React.FC<ConstructorPlugT> = ({ title, position }) => {
  const className = classNames(styles.wrapper, position && styles[position])

  return <p className={className}>{title}</p>
}

export default ConstructorPlug
