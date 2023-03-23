import React from 'react'
import { useParams } from 'react-router-dom'

// Utils
import { useFetchOrder } from 'hooks/useFetchOrder'

// Components
import { Loader, OrderDetailsBody } from 'components'

const OrderDetails: React.FC = () => {
  // Getting order
  const { id = '' } = useParams()
  const { order, isLoading, hasError } = useFetchOrder(id)

  return (
    <>
      {isLoading && <Loader size="small" />}

      {hasError && <h1>Что-то пошло не так...</h1>}

      {order && <OrderDetailsBody order={order} />}
    </>
  )
}

export default React.memo(OrderDetails)
