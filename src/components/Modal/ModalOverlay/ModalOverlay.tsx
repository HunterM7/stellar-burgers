import React from 'react'

// Styles
import styles from './ModalOverlay.module.scss'

type ModalOverlayT = {
  closeFunc: () => void
}

const ModalOverlay: React.FC<ModalOverlayT> = ({ closeFunc }) => {
  return <div className={styles.bg} onClick={closeFunc}></div>
}

export default ModalOverlay
