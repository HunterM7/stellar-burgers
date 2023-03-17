import React from 'react'
import classNames from 'classnames'

// Components
import { OrderDetails } from 'components'

// Styles
import styles from './OrderPage.module.scss'

const OrderPage: React.FC = () => {
  return (
    <main className={classNames('container', styles.wrapper)}>
      <OrderDetails />
    </main>
  )
}

export default React.memo(OrderPage)
