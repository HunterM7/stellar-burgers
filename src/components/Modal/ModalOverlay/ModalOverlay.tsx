import React from 'react'

// Styles
import styles from './ModalOverlay.module.scss'

type ModalOverlayType = {
  toggleModal: () => void
}

const ModalOverlay: React.FC<ModalOverlayType> = ({ toggleModal }) => {
  return <div className={styles.bg} onClick={toggleModal}></div>
}

export default ModalOverlay
