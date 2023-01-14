import React from 'react'

import { dataType } from '../utils/types'

export interface BurgerStateType {
  bun: dataType
  ingredients: dataType[]
  totalPrice: number
}

export type BurgerActions =
  | 'setBun'
  | 'setIngredient'
  | 'removeIngredient'
  | 'setTotalPrice'

export const initialBurgerState: BurgerStateType = {
  bun: {} as dataType,
  ingredients: [],
  totalPrice: 0,
}

export const BurgerContext = React.createContext<{
  state: BurgerStateType
  dispatch: React.Dispatch<BurgerActions>
}>({ state: initialBurgerState, dispatch: () => undefined })
