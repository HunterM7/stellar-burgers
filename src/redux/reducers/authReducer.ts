import {
  AuthActions,
  AUTH_CHANGE_EMAIL,
  AUTH_CHANGE_NAME,
  AUTH_CHANGE_PASSWORD,
} from 'redux/actions/authActions'
import { LoginFetchStatus, RegisterFetchStatus } from 'redux/actionTypes'

export type TAuthUser = {
  name: string
  email: string
  password: string
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
    password: '',
    isLoggedIn: false,
  },
  isLoading: false,
  hasError: false,
}

export const authReducer = (
  state = initialState,
  action: AuthActions,
): TAuthState => {
  switch (action.type) {
    // Register logic
    case RegisterFetchStatus.REGISTER_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case RegisterFetchStatus.REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      }

    case RegisterFetchStatus.REGISTER_ERROR:
      return { ...state, isLoading: false, hasError: true }

    // Login logic
    case LoginFetchStatus.LOGIN_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case LoginFetchStatus.LOGIN_SUCCESS:
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

    case LoginFetchStatus.LOGIN_ERROR:
      return { ...state, isLoading: false, hasError: true }

    // Change state logic
    case AUTH_CHANGE_NAME:
      return { ...state, user: { ...state.user, name: action.name } }

    case AUTH_CHANGE_EMAIL:
      return { ...state, user: { ...state.user, email: action.email } }

    case AUTH_CHANGE_PASSWORD:
      return { ...state, user: { ...state.user, password: action.password } }

    default:
      return { ...state }
  }
}
