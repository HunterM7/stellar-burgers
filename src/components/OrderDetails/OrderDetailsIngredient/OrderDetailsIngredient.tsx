import React from 'react'
import { TIngredient } from 'redux/actionTypes'

interface IOrderDetailsIngredient {
  ingredient: TIngredient
  count: number
}

const OrderDetailsIngredient: React.FC<IOrderDetailsIngredient> = () => {
  return <div>OrderDetailsIngredient</div>
}

export default OrderDetailsIngredient
