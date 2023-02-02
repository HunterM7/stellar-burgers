import React, { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useKeyPress from 'hooks/useKeyPress'

// Components
import { ModalOverlay } from 'components'

// Styles
import styles from './Modal.module.scss'

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
  // Heading in modal window
  const heading = React.useMemo(
    () => <h2 className={styles.title}>{title}</h2>,
    [title],
  )

  // Handling Escape press
  useKeyPress('Escape', closeFunc)

  // Root where we render modal window
  const modalRoot = React.useMemo(
    () => document.getElementById('modal') as HTMLElement,
    [],
  )

  // If there is no root container we don't render modal window
  if (!modalRoot) return null

  return createPortal(
    <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
      <div
        className={`
				${styles.modal}
				${title ? styles['modal--withHeading'] : ''}
			`}
      >
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

export default React.memo(Modal)
