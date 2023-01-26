import React from 'react'
import { createPortal } from 'react-dom'

import styles from './PopupHint.module.scss'

const popupRoot = document.getElementById('popup-hint') as HTMLElement

type Props = {
  title: string
}

const PopupHint: React.FC<Props> = ({ title }) => {
  return createPortal(<div className={styles.wrapper}>{title}</div>, popupRoot)
}

export default PopupHint
