import { RegisterFetchStatus } from 'redux/actionTypes'
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
} from 'redux/actions/authActions'

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
