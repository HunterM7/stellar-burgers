import React from 'react'
import classNames from 'classnames'
import { useParams } from 'react-router-dom'

// Redux
import { useDispatch } from 'redux/store'
import { getIngredients } from 'redux/actions'

// Components
import { OrderDetails } from 'components'

// Styles
import styles from './OrderPage.module.scss'

const OrderPage = () => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()

  React.useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch, id])

  return (
    <main className={classNames('container', styles.wrapper)}>
      <OrderDetails />
    </main>
  )
}

export default OrderPage
