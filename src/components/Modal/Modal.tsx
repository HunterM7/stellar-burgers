import React, { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Utils
import useKeyPress from 'hooks/useKeyPress'
import { TUseLocation } from 'utils/types'

// Components
import { ModalOverlay } from 'components'

// Styles
import styles from './Modal.module.scss'

interface TModal {
  title?: string
  children?: React.ReactElement
}

const Modal: React.FC<PropsWithChildren<TModal>> = ({ title, children }) => {
  const location: TUseLocation = useLocation()

  // Heading in modal window
  const heading = React.useMemo(
    () => <h2 className={styles.title}>{title}</h2>,
    [title],
  )

  // Close function
  const navigate = useNavigate()

  const closeFunc = React.useCallback(() => {
    location?.state?.background && navigate(location.state.background)
  }, [location.state, navigate])

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
    <div className={styles.wrapper}>
      <div
        className={`
				${styles.modal}
				${title ? styles.modal_withHeading : ''}
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
