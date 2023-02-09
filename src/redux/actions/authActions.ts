import { AppThunk, AppDispatch } from 'redux/store'
import { checkReponse } from 'utils/checkReponse'
import { API_AUTH_LOGIN, API_AUTH_REGISTER } from 'utils/constants'
import { LoginFetchStatus, RegisterFetchStatus } from 'redux/actionTypes'
import {
  registerError,
  registerRequest,
  registerSuccess,
} from 'redux/actionCreators'
import {
  TAuthLogin,
  TAuthRegister,
  TAuthUser,
} from 'redux/reducers/authReducer'
import {
  loginError,
  loginRequest,
  loginSuccess,
} from 'redux/actionCreators/authActionCreators'

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

export const AUTH_CHANGE_NAME = 'AUTH_CHANGE_NAME'
export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL'
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD'

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
// -----------
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
// -----------

export interface authChangeNameA {
  type: typeof AUTH_CHANGE_NAME
  name: string
}
export interface authChangeEmailA {
  type: typeof AUTH_CHANGE_EMAIL
  email: string
}
export interface authChangePasswordA {
  type: typeof AUTH_CHANGE_PASSWORD
  password: string
}

export type AuthActions =
  | registerRequestA
  | registerErrorA
  | registerSuccessA
  | loginRequestA
  | loginErrorA
  | loginSuccessA
  | authChangeNameA
  | authChangeEmailA
  | authChangePasswordA

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
        dispatch(loginSuccess(res))
      })
      .catch((err) => dispatch(loginError()))
  }
