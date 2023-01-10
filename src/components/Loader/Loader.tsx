import React from 'react'

// Styles
import styles from './Loader.module.scss'

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ring}></div>
      <span className={styles.text}>загрузка...</span>
    </div>
  )
}

export default Loader
