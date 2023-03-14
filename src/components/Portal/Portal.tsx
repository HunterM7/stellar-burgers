import React from 'react'
import { createPortal } from 'react-dom'

// Styles
import styles from './Portal.module.scss'

const Portal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const portalRoot = document.createElement('div')
  portalRoot.classList.add(styles.modal)

  React.useEffect(() => {
    document.body.appendChild(portalRoot)

    return () => {
      document.body.removeChild(portalRoot)
    }
  }, [portalRoot])

  return createPortal(children, portalRoot)
}

export default React.memo(Portal)
