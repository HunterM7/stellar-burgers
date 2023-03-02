import React from 'react'

// Components
import { ConstructorBody, ConstructorFooter } from 'components'

// Styles
import styles from './BurgerConstructor.module.scss'

const BurgerConstructor: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <ConstructorBody />
      <ConstructorFooter />
    </section>
  )
}

export default React.memo(BurgerConstructor)
