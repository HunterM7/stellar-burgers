import React from 'react'
import { createPortal } from 'react-dom'

// Styles
import styles from './Portal.module.scss'

interface IPortal {
  type: 'modal' | 'popup'
}

const Portal: React.FC<React.PropsWithChildren<IPortal>> = ({
  type,
  children,
}) => {
  const portalRoot = document.createElement('div')
  portalRoot.classList.add(styles[type])

  React.useEffect(() => {
    document.body.appendChild(portalRoot)

    return () => {
      document.body.removeChild(portalRoot)
    }
  }, [portalRoot])

  return createPortal(children, portalRoot)
}

export default React.memo(Portal)
