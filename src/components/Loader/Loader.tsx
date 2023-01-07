import React from 'react'

import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ring}></div>
      <span className={styles.text}>загрузка...</span>
    </div>
  )
}

export default Loader
