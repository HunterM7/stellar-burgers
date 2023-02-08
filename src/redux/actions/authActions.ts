import { AppThunk, AppDispatch } from 'redux/store'
import { checkReponse } from 'utils/checkReponse'
import { API_AUTH_REGISTER } from 'utils/constants'
import { RegisterFetchStatus } from 'redux/actionTypes'
import {
  registerError,
  registerRequest,
  registerSuccess,
} from 'redux/actionCreators'
import { TAuthUser } from 'redux/reducers/authReducer'

export type TRegisterResponse = {
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
  | authChangeNameA
  | authChangeEmailA
  | authChangePasswordA

export const handleRegister =
  ({ name, email, password }: TAuthUser): AppThunk =>
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
