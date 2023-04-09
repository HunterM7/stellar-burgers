import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

// Styles
import styles from './AuthLink.module.scss'

interface IAuthLink {
  title: string
  buttonName: string
  path: string
}

const AuthLink: React.FC<IAuthLink> = ({ title, buttonName, path }) => {
  const navigate = useNavigate()

  const handleButton = () => navigate(path)

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>

      <Button
        htmlType="button"
        type="secondary"
        size="large"
        extraClass={styles.button}
        onClick={handleButton}
      >
        {buttonName}
      </Button>
    </div>
  )
}

export default React.memo(AuthLink)
