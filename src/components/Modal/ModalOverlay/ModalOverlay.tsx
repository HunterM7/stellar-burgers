import React from 'react'

// Styles
import styles from './ModalOverlay.module.scss'

type ModalOverlayT = {
  toggleModal: () => void
}

const ModalOverlay: React.FC<ModalOverlayT> = ({ toggleModal }) => {
  return <div className={styles.bg} onClick={toggleModal}></div>
}

export default ModalOverlay
