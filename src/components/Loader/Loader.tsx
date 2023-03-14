import classNames from 'classnames'
import React from 'react'

// Styles
import styles from './Loader.module.scss'

interface ILoader {
  size?: 'small' | 'medium'
}

const Loader: React.FC<ILoader> = ({ size = 'medium' }) => {
  return (
    <div className={classNames(styles.wrapper, styles[size])}>
      <div className={styles.ring}></div>
      <span className={styles.text}>загрузка...</span>
    </div>
  )
}

export default React.memo(Loader)
