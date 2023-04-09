import React from 'react'

// Components
import { Portal } from 'components'

// Styles
import styles from './PopupHint.module.scss'

type TPopupHint = {
  title: string
}

const PopupHint: React.FC<TPopupHint> = ({ title }) => {
  return (
    <Portal type="popup">
      <div className={styles.wrapper}>{title}</div>
    </Portal>
  )
}

export default PopupHint
