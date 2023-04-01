import { AuthActions } from 'redux/actions'
import { AuthFetchStatus } from 'redux/actionTypes'

export type TAuthUser = {
  name: string
  email: string
}

export type TAuthRegister = {
  name: string
  email: string
  password: string
}

export type TAuthLogin = {
  email: string
  password: string
}

export type TAuthState = {
  user: TAuthUser | null
  isLoading: boolean
  hasError: boolean
}

const initialState: TAuthState = {
  user: null,
  isLoading: true,
  hasError: false,
}

export const authReducer = (
  state = initialState,
  action: AuthActions,
): TAuthState => {
  switch (action.type) {
    // Register logic
    case AuthFetchStatus.REGISTER_REQUEST:
      return initialState

    case AuthFetchStatus.REGISTER_ERROR:
      return { ...state, isLoading: false, hasError: true }

    case AuthFetchStatus.REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      }

    // Login logic
    case AuthFetchStatus.LOGIN_REQUEST:
      return initialState

    case AuthFetchStatus.LOGIN_ERROR:
      return { ...initialState, isLoading: false, hasError: true }

    case AuthFetchStatus.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      }

    // Logout logic
    case AuthFetchStatus.LOGOUT_REQUEST:
      return initialState

    case AuthFetchStatus.LOGOUT_ERROR:
      return { ...initialState, isLoading: false, hasError: true }

    case AuthFetchStatus.LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
      }

    // Get user logic
    case AuthFetchStatus.GET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case AuthFetchStatus.GET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }

    case AuthFetchStatus.GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      }

    // Set user logic
    case AuthFetchStatus.SET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case AuthFetchStatus.SET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }

    case AuthFetchStatus.SET_USER_SUCCESS:
      return {
        ...state,
        user: {
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      }

    default:
      return state
  }
}
