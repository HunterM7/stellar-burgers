import React from 'react'

// Components
import { Modal, OrderDetails } from 'components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'redux/store'
import { webSocketOrdersSelector } from 'redux/selectors'

const OrderDetailsModal = () => {
  const { id = '' } = useParams()
  const allOrders = useSelector(webSocketOrdersSelector)

  const currentOrder = allOrders.find(el => el.number === +id)

  return (
    <Modal title={`#${id}`} titleSize="small">
      {currentOrder ? (
        <OrderDetails order={currentOrder} />
      ) : (
        <h1>Что-то пошло не так...</h1>
      )}
    </Modal>
  )
}

export default OrderDetailsModal
