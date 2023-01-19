import { dataStateType, Status } from '../actionTypes/types'
import { dataActions } from '../actions/dataAction'

const initialState: dataStateType = {
  data: [],
  isLoading: true,
  hasError: false,
}

export const dataReducer = (
  state: dataStateType = initialState,
  action: dataActions,
) => {
  switch (action.type) {
    case Status._REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }
    case Status._SUCCESS: {
      return {
        ...state,
        data: action.data,
        isLoading: false,
      }
    }
    case Status._ERROR: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    }

    default: {
      return state
    }
  }
}
