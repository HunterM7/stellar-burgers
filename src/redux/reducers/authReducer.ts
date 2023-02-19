import { AuthActions } from 'redux/actions/authActions'
import {
  GetUserFetchStatus,
  LoginFetchStatus,
  LogoutFetchStatus,
  RegisterFetchStatus,
  SetUserFetchStatus,
} from 'redux/actionTypes'

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
          isLoggedIn: true,
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

    // Logout logic
    case LogoutFetchStatus.LOGOUT_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case LogoutFetchStatus.LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      }

    case LogoutFetchStatus.LOGOUT_ERROR:
      return { ...state, isLoading: false, hasError: true }

    // Get user logic
    case GetUserFetchStatus.GET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case GetUserFetchStatus.GET_USER_SUCCESS:
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

    case GetUserFetchStatus.GET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }

    // Set user logic
    case SetUserFetchStatus.SET_USER_REQUEST:
      return { ...state, isLoading: true, hasError: false }

    case SetUserFetchStatus.SET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.response.user.name,
          email: action.response.user.email,
        },
        isLoading: false,
      }

    case SetUserFetchStatus.SET_USER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }

    default:
      return { ...state }
  }
}
