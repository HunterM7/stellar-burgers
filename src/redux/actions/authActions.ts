// Redux
import { AppThunk, AppDispatch } from 'redux/store'
import { TAuthLogin, TAuthRegister } from 'redux/reducers/authReducer'
import {
  GetUserFetchStatus,
  LoginFetchStatus,
  LogoutFetchStatus,
  RegisterFetchStatus,
  SetUserFetchStatus,
} from 'redux/actionTypes'
import {
  registerError,
  registerRequest,
  registerSuccess,
} from 'redux/actionCreators'
import {
  getUserError,
  getUserRequest,
  getUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  setUserError,
  setUserRequest,
  setUserSuccess,
} from 'redux/actionCreators/authActionCreators'

// API Endpoints
import {
  API_AUTH_LOGIN,
  API_AUTH_REGISTER,
  API_AUTH_USER,
  API_AUTH_LOGOUT,
} from 'utils/constants'

// Functions
import { checkReponse } from 'utils/checkReponse'
import { deleteCookie, getCookie } from 'utils/cookie'
import { refreshToken } from 'utils/auth/refreshToken'
import { requestCreator } from 'utils/requestCreator'
import { saveTokens } from 'utils/auth/saveTokens'

export type TRegisterResponse = {
  success: boolean
  user: {
    email: string
    name: string
  }
  accessToken: string
  refreshToken: string
}

export type TLoginResponse = {
  success: boolean
  user: {
    email: string
    name: string
  }
  accessToken: string
  refreshToken: string
}

export type TUserResponse = {
  success: boolean
  user: {
    email: string
    name: string
  }
}

export type TSetUser = {
  name: string
  email: string
  password: string
}

export type TLogoutResponse = {
  success: boolean
  message: string
}

export type TErrorResponse = {
  success: boolean
  message: string
}

// Register actions
export interface registerRequestA {
  type: typeof RegisterFetchStatus.REGISTER_REQUEST
}

export interface registerErrorA {
  type: typeof RegisterFetchStatus.REGISTER_ERROR
}

export interface registerSuccessA {
  type: typeof RegisterFetchStatus.REGISTER_SUCCESS
  response: TRegisterResponse
}

// Login actions
export interface loginRequestA {
  type: typeof LoginFetchStatus.LOGIN_REQUEST
}

export interface loginErrorA {
  type: typeof LoginFetchStatus.LOGIN_ERROR
}

export interface loginSuccessA {
  type: typeof LoginFetchStatus.LOGIN_SUCCESS
  response: TLoginResponse
}

// Logout actions
export interface logoutRequestA {
  type: typeof LogoutFetchStatus.LOGOUT_REQUEST
}

export interface logoutErrorA {
  type: typeof LogoutFetchStatus.LOGOUT_ERROR
}

export interface logoutSuccessA {
  type: typeof LogoutFetchStatus.LOGOUT_SUCCESS
  response: TLogoutResponse
}

// Get user actions
export interface getUserRequestA {
  type: typeof GetUserFetchStatus.GET_USER_REQUEST
}

export interface getUserErrorA {
  type: typeof GetUserFetchStatus.GET_USER_ERROR
}

export interface getUserSuccessA {
  type: typeof GetUserFetchStatus.GET_USER_SUCCESS
  response: TUserResponse
}

// Set user actions
export interface setUserRequestA {
  type: typeof SetUserFetchStatus.SET_USER_REQUEST
}

export interface setUserErrorA {
  type: typeof SetUserFetchStatus.SET_USER_ERROR
}

export interface setUserSuccessA {
  type: typeof SetUserFetchStatus.SET_USER_SUCCESS
  response: TUserResponse
}

export type AuthActions =
  | registerRequestA
  | registerErrorA
  | registerSuccessA
  | loginRequestA
  | loginErrorA
  | loginSuccessA
  | logoutRequestA
  | logoutErrorA
  | logoutSuccessA
  | getUserRequestA
  | getUserErrorA
  | getUserSuccessA
  | setUserRequestA
  | setUserErrorA
  | setUserSuccessA

export const handleRegister =
  ({ name, email, password }: TAuthRegister): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(registerRequest())

    const requestOptions = requestCreator('POST', {}, { name, email, password })

    fetch(API_AUTH_REGISTER, requestOptions)
      .then((res) => checkReponse<TRegisterResponse>(res))
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken)

        dispatch(registerSuccess(res))
      })
      .catch((err) => dispatch(registerError()))
  }

export const handleLogin =
  ({ email, password }: TAuthLogin): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(loginRequest())

    const requestOptions = requestCreator('POST', {}, { email, password })

    fetch(API_AUTH_LOGIN, requestOptions)
      .then((res) => checkReponse<TLoginResponse>(res))
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken)

        dispatch(loginSuccess(res))
      })
      .catch((err) => {
        console.log('Login Error', err)

        dispatch(loginError())
      })
  }

export const handleLogout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(logoutRequest())

  const requestOptions = requestCreator(
    'POST',
    {},
    { token: localStorage.getItem('refreshToken') },
  )

  fetch(API_AUTH_LOGOUT, requestOptions)
    .then((res) => checkReponse<TLogoutResponse>(res))
    .then((res) => {
      deleteCookie('token')
      localStorage.removeItem('refreshToken')

      dispatch(logoutSuccess(res))
    })
    .catch((err) => {
      console.log('Login Error', err)

      dispatch(logoutError())
    })
}

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getUserRequest())

  const requestOptions = requestCreator('GET', {
    Authorization: 'Bearer '.concat(getCookie('token') || ''),
  })

  fetch(API_AUTH_USER, requestOptions)
    .then((res) => checkReponse<TUserResponse>(res))
    .then((res) => dispatch(getUserSuccess(res)))
    .catch((err: TErrorResponse) => {
      if (err.message === 'jwt expired') {
        refreshToken().then(() => dispatch(getUser()))
      } else {
        dispatch(getUserError())
      }
    })
}

export const setUser =
  ({ name, email, password }: TSetUser): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setUserRequest())

    const requestOptions = requestCreator(
      'PATCH',
      { Authorization: 'Bearer '.concat(getCookie('token') || '') },
      { name, email, password },
    )

    fetch(API_AUTH_USER, requestOptions)
      .then((res) => checkReponse<TUserResponse>(res))
      .then((res) => dispatch(setUserSuccess(res)))
      .catch((err: TErrorResponse) => {
        if (err.message === 'jwt expired') {
          refreshToken().then(() =>
            dispatch(setUser({ name, email, password })),
          )
        } else {
          dispatch(setUserError())
        }
      })
  }
