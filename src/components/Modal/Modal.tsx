import React, { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

// Yandex Components
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useKeyPress from '../../hooks/useKeyPress'

// Files
import styles from './Modal.module.scss'

// Components
import ModalOverlay from './ModalOverlay/ModalOverlay'

interface ModalType {
  title?: string
  toggleModal: () => void
  children?: React.ReactElement
}

const Modal: React.FC<PropsWithChildren<ModalType>> = ({
  title,
  toggleModal,
  children,
}) => {
  useKeyPress('Escape', toggleModal)

  const heading = <h2 className={styles.title}>{title}</h2>

  return createPortal(
    <div className={styles.wrapper}>
      <div
        className={`
				${styles.modal}
				${title ? styles['modal--withHeading'] : ''}
			`}>
        <div className={styles.header}>
          {title && heading}

          <button className={styles.closeBtn}>
            <CloseIcon type="primary" onClick={toggleModal} />
          </button>
        </div>

        <div className={styles.content}>{children}</div>
      </div>

      <ModalOverlay toggleModal={toggleModal} />
    </div>,
    document.body,
  )
}

export default Modal
