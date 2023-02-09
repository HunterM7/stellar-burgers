import { LoginFetchStatus, RegisterFetchStatus } from 'redux/actionTypes'
import {
  TRegisterResponse,
  registerRequestA,
  registerErrorA,
  registerSuccessA,
  authChangeNameA,
  AUTH_CHANGE_NAME,
  AUTH_CHANGE_EMAIL,
  authChangeEmailA,
  authChangePasswordA,
  AUTH_CHANGE_PASSWORD,
  loginRequestA,
  loginErrorA,
  loginSuccessA,
  TLoginResponse,
} from 'redux/actions/authActions'

// Register action creators
export const registerRequest = (): registerRequestA => ({
  type: RegisterFetchStatus.REGISTER_REQUEST,
})

export const registerError = (): registerErrorA => ({
  type: RegisterFetchStatus.REGISTER_ERROR,
})

export const registerSuccess = (
  response: TRegisterResponse,
): registerSuccessA => ({
  type: RegisterFetchStatus.REGISTER_SUCCESS,
  response,
})

// Login action creators
export const loginRequest = (): loginRequestA => ({
  type: LoginFetchStatus.LOGIN_REQUEST,
})

export const loginError = (): loginErrorA => ({
  type: LoginFetchStatus.LOGIN_ERROR,
})

export const loginSuccess = (response: TLoginResponse): loginSuccessA => ({
  type: LoginFetchStatus.LOGIN_SUCCESS,
  response,
})

export const authChangeName = (name: string): authChangeNameA => ({
  type: AUTH_CHANGE_NAME,
  name,
})

export const authChangeEmail = (email: string): authChangeEmailA => ({
  type: AUTH_CHANGE_EMAIL,
  email,
})

export const authChangePassword = (password: string): authChangePasswordA => ({
  type: AUTH_CHANGE_PASSWORD,
  password,
})
