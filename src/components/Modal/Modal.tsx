import React, { PropsWithChildren } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// Utils
import useKeyPress from 'hooks/useKeyPress'
import { IUseLocation } from 'utils/types'

// Components
import { Portal, ModalOverlay } from 'components'

// Styles
import styles from './Modal.module.scss'
import classNames from 'classnames'

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

  // Close function
  const closeFunc = React.useCallback(() => {
    location?.state?.background && navigate(location.state.background)
  }, [location.state, navigate])

  // Handling Escape press
  useKeyPress('Escape', closeFunc)

  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.header}>
          {!!title && (
            <h2
              className={classNames(styles.title, styles[`title_${titleSize}`])}
            >
              {title}
            </h2>
          )}

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

export default React.memo(Modal)
