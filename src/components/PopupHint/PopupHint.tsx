import React from 'react'
import { createPortal } from 'react-dom'

// Styles
import styles from './PopupHint.module.scss'

type TPopupHint = {
  title: string
}

const PopupHint: React.FC<TPopupHint> = ({ title }) => {
  const popupRoot = React.useMemo(
    () => document.getElementById('popup-hint') as HTMLElement,
    [],
  )

  return createPortal(<div className={styles.wrapper}>{title}</div>, popupRoot)
}

export default React.memo(PopupHint)
