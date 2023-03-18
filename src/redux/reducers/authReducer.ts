import { AuthActions } from 'redux/actions'
import { AuthFetchStatus } from 'redux/actionTypes'

export type TAuthUser = {
  name: string
  email: string
  isLoggedIn: boolean
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
  user: TAuthUser
  isLoading: boolean
  hasError: boolean
}

const initialState: TAuthState = {
  user: {
    name: '',
    email: '',
    isLoggedIn: false,
  },
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
      return { ...state, isLoading: true, hasError: false }

    case AuthFetchStatus.REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
          isLoggedIn: true,
        },
        isLoading: false,
      }

    case AuthFetchStatus.REGISTER_ERROR:
      return { ...state, isLoading: false, hasError: true }

    // Login logic
    case AuthFetchStatus.LOGIN_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case AuthFetchStatus.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
          isLoggedIn: true,
        },
        isLoading: false,
      }

    case AuthFetchStatus.LOGIN_ERROR:
      return { ...initialState, isLoading: false, hasError: true }

    // Logout logic
    case AuthFetchStatus.LOGOUT_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case AuthFetchStatus.LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
      }

    case AuthFetchStatus.LOGOUT_ERROR:
      return { ...state, isLoading: false, hasError: true }

    // Get user logic
    case AuthFetchStatus.GET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case AuthFetchStatus.GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
          isLoggedIn: true,
        },
        isLoading: false,
      }

    case AuthFetchStatus.GET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }

    // Set user logic
    case AuthFetchStatus.SET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case AuthFetchStatus.SET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      }

    case AuthFetchStatus.SET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }

    default:
      return state
  }
}
