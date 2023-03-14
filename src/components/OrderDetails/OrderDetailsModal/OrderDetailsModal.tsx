import React from 'react'

// Components
import { Modal, OrderDetails } from 'components'
import { useParams } from 'react-router-dom'

const OrderDetailsModal: React.FC = () => {
  const { id = '' } = useParams()

  return (
    <Modal title={`#${id}`} titleSize="small">
      <OrderDetails />
    </Modal>
  )
}

export default React.memo(OrderDetailsModal)
