import { AppThunk, AppDispatch } from 'redux/store'
import { checkReponse } from 'utils/checkReponse'
import {
  API_AUTH_LOGIN,
  API_AUTH_REGISTER,
  API_AUTH_USER,
} from 'utils/constants'
import {
  GetUserFetchStatus,
  LoginFetchStatus,
  RegisterFetchStatus,
} from 'redux/actionTypes'
import {
  registerError,
  registerRequest,
  registerSuccess,
} from 'redux/actionCreators'
import { TAuthLogin, TAuthRegister } from 'redux/reducers/authReducer'
import {
  getUserError,
  getUserRequest,
  getUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
} from 'redux/actionCreators/authActionCreators'
import { getCookie, setCookie } from 'utils/cookie'

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

// Get user actions
export interface getUserRequestA {
  type: typeof GetUserFetchStatus.GET_USER_REQUEST
}

export interface getUserErrorA {
  type: typeof GetUserFetchStatus.GET_USER_ERROR
}

export interface getUserSuccessA {
  type: typeof GetUserFetchStatus.GET_USER_SUCCESS
  response: TLoginResponse
}

export type AuthActions =
  | registerRequestA
  | registerErrorA
  | registerSuccessA
  | loginRequestA
  | loginErrorA
  | loginSuccessA
  | getUserRequestA
  | getUserErrorA
  | getUserSuccessA

export const handleRegister =
  ({ name, email, password }: TAuthRegister): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(registerRequest())

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }

    fetch(API_AUTH_REGISTER, requestOptions)
      .then((res) => checkReponse<TRegisterResponse>(res))
      .then((res) => {
        const authToken = res.accessToken.split('Bearer ')[1]

        if (authToken) {
          setCookie('token', authToken)
          localStorage.setItem('refreshToken', res.refreshToken)
        }

        dispatch(registerSuccess(res))
      })
      .catch((err) => dispatch(registerError()))
  }

export const handleLogin =
  ({ email, password }: TAuthLogin): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(loginRequest())

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    }

    fetch(API_AUTH_LOGIN, requestOptions)
      .then((res) => checkReponse<TLoginResponse>(res))
      .then((res) => {
        const authToken = res.accessToken.split('Bearer ')[1]

        if (authToken) {
          setCookie('token', authToken)
          localStorage.setItem('refreshToken', res.refreshToken)
        }

        dispatch(loginSuccess(res))
      })
      .catch((err) => dispatch(loginError()))
  }

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getUserRequest())

  const requestOptions = {
    method: 'GET',
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(getCookie('token') || ''),
    },
    // redirect: 'follow',
    // referrerPolicy: 'no-referrer',
  }

  fetch(API_AUTH_USER, requestOptions)
    .then((res) => checkReponse<TLoginResponse>(res))
    .then((res) => dispatch(getUserSuccess(res)))
    .catch((err) => dispatch(getUserError()))
}
