import {
  GetUserFetchStatus,
  LoginFetchStatus,
  LogoutFetchStatus,
  RegisterFetchStatus,
  SetUserFetchStatus,
} from 'redux/actionTypes'
import {
  TRegisterResponse,
  registerRequestA,
  registerErrorA,
  registerSuccessA,
  loginRequestA,
  loginErrorA,
  loginSuccessA,
  TLoginResponse,
  getUserRequestA,
  getUserErrorA,
  getUserSuccessA,
  logoutRequestA,
  logoutErrorA,
  logoutSuccessA,
  TLogoutResponse,
  setUserRequestA,
  setUserErrorA,
  setUserSuccessA,
  TUserResponse,
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

// Logout action creators
export const logoutRequest = (): logoutRequestA => ({
  type: LogoutFetchStatus.LOGOUT_REQUEST,
})

export const logoutError = (): logoutErrorA => ({
  type: LogoutFetchStatus.LOGOUT_ERROR,
})

export const logoutSuccess = (response: TLogoutResponse): logoutSuccessA => ({
  type: LogoutFetchStatus.LOGOUT_SUCCESS,
  response,
})

// Getting user action creators
export const getUserRequest = (): getUserRequestA => ({
  type: GetUserFetchStatus.GET_USER_REQUEST,
})

export const getUserError = (): getUserErrorA => ({
  type: GetUserFetchStatus.GET_USER_ERROR,
})

export const getUserSuccess = (response: TUserResponse): getUserSuccessA => ({
  type: GetUserFetchStatus.GET_USER_SUCCESS,
  response,
})

// Setting user action creators
export const setUserRequest = (): setUserRequestA => ({
  type: SetUserFetchStatus.SET_USER_REQUEST,
})

export const setUserError = (): setUserErrorA => ({
  type: SetUserFetchStatus.SET_USER_ERROR,
})

export const setUserSuccess = (response: TUserResponse): setUserSuccessA => ({
  type: SetUserFetchStatus.SET_USER_SUCCESS,
  response,
})
