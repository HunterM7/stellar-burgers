import React, { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useKeyPress from '../../hooks/useKeyPress'

// Components
import ModalOverlay from './ModalOverlay/ModalOverlay'

// Styles
import styles from './Modal.module.scss'

const modalRoot = document.getElementById('modal') as HTMLElement

interface TModal {
  title?: string
  closeFunc: () => void
  children?: React.ReactElement
}

const Modal: React.FC<PropsWithChildren<TModal>> = ({
  title,
  closeFunc,
  children,
}) => {
  // Handling Escape press
  useKeyPress('Escape', closeFunc)

  const heading = <h2 className={styles.title}>{title}</h2>

  if (!modalRoot) return null

  return createPortal(
    <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
      <div
        className={`
				${styles.modal}
				${title ? styles['modal--withHeading'] : ''}
			`}>
        <div className={styles.header}>
          {title && heading}

          <button className={styles.closeBtn}>
            <CloseIcon type="primary" onClick={closeFunc} />
          </button>
        </div>

        <div className={styles.content}>{children}</div>
      </div>

      <ModalOverlay closeFunc={closeFunc} />
    </div>,
    modalRoot,
  )
}

export default Modal
