import React, { PropsWithChildren } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Utils
import { IUseLocation } from 'utils/types'

// Hooks
import useKeyPress from 'hooks/useKeyPress'

// Components
import { ModalOverlay } from 'ui'
import { Portal } from 'components'

// Styles
import styles from './Modal.module.scss'

interface IModal {
  title?: string
  titleSize?: 'small' | 'medium'
}

const Modal: React.FC<PropsWithChildren<IModal>> = ({
  title,
  titleSize = 'medium',
  children,
}) => {
  const navigate = useNavigate()
  const location: IUseLocation = useLocation()

  // Modal heading
  const heading = title ? (
    <h2 className={classNames(styles.title, styles[`title_${titleSize}`])}>
      {title}
    </h2>
  ) : null

  // Close function
  const closeFunc = React.useCallback(() => {
    if (location.state?.background) navigate(location.state.background)
  }, [location.state, navigate])

  // Handling Escape press
  useKeyPress('Escape', closeFunc)

  return (
    <Portal type="modal">
      <div className={styles.modal}>
        <div className={styles.header}>
          {heading}

          <button className={styles.closeBtn} onClick={closeFunc}>
            <CloseIcon type="primary" />
          </button>
        </div>

        <div className={styles.content}>{children}</div>
      </div>

      <ModalOverlay closeFunc={closeFunc} />
    </Portal>
  )
}

export default Modal
