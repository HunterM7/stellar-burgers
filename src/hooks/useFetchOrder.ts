import React from 'react'

// Redux
import { IWSOrder } from 'redux/actionTypes'

// Urils
import { API_URL_ORDERS } from 'utils/data/constants'
import { customFetch } from 'utils/api/customFetch'

interface IOrderFetch {
  success: boolean
  orders: IWSOrder[]
}

interface IOrderState {
  isLoading: boolean
  hasError: boolean
  order: IWSOrder | null
}

const initialState: IOrderState = {
  isLoading: true,
  hasError: false,
  order: null,
}

export const useFetchOrder = (id: string) => {
  const [{ order, isLoading, hasError }, setOrder] =
    React.useState<IOrderState>(initialState)

  React.useEffect(() => {
    customFetch<IOrderFetch>(`${API_URL_ORDERS}/${id}`).then(res => {
      if (res.success) {
        setOrder(prev => ({
          ...prev,
          isLoading: false,
          order: res.orders[0],
        }))
      } else {
        setOrder({ isLoading: false, hasError: true, order: null })
      }
    })
  }, [id])

  return { order, isLoading, hasError }
}
