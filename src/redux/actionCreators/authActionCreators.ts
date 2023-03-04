// Redux
import {
  AuthFetchStatus,
  ILoginResponse,
  ILogoutResponse,
  IRegisterResponse,
  IUserResponse,
} from 'redux/actionTypes'
import {
  registerRequestA,
  registerErrorA,
  registerSuccessA,
  loginRequestA,
  loginErrorA,
  loginSuccessA,
  getUserRequestA,
  getUserErrorA,
  getUserSuccessA,
  logoutRequestA,
  logoutErrorA,
  logoutSuccessA,
  setUserRequestA,
  setUserErrorA,
  setUserSuccessA,
} from 'redux/actions'

// Register action creators
export const registerRequest = (): registerRequestA => ({
  type: AuthFetchStatus.REGISTER_REQUEST,
})

export const registerError = (): registerErrorA => ({
  type: AuthFetchStatus.REGISTER_ERROR,
})

export const registerSuccess = (
  response: IRegisterResponse,
): registerSuccessA => ({
  type: AuthFetchStatus.REGISTER_SUCCESS,
  response,
})

// Login action creators
export const loginRequest = (): loginRequestA => ({
  type: AuthFetchStatus.LOGIN_REQUEST,
})

export const loginError = (): loginErrorA => ({
  type: AuthFetchStatus.LOGIN_ERROR,
})

export const loginSuccess = (response: ILoginResponse): loginSuccessA => ({
  type: AuthFetchStatus.LOGIN_SUCCESS,
  response,
})

// Logout action creators
export const logoutRequest = (): logoutRequestA => ({
  type: AuthFetchStatus.LOGOUT_REQUEST,
})

export const logoutError = (): logoutErrorA => ({
  type: AuthFetchStatus.LOGOUT_ERROR,
})

export const logoutSuccess = (response: ILogoutResponse): logoutSuccessA => ({
  type: AuthFetchStatus.LOGOUT_SUCCESS,
  response,
})

// Getting user action creators
export const getUserRequest = (): getUserRequestA => ({
  type: AuthFetchStatus.GET_USER_REQUEST,
})

export const getUserError = (): getUserErrorA => ({
  type: AuthFetchStatus.GET_USER_ERROR,
})

export const getUserSuccess = (response: IUserResponse): getUserSuccessA => ({
  type: AuthFetchStatus.GET_USER_SUCCESS,
  response,
})

// Setting user action creators
export const setUserRequest = (): setUserRequestA => ({
  type: AuthFetchStatus.SET_USER_REQUEST,
})

export const setUserError = (): setUserErrorA => ({
  type: AuthFetchStatus.SET_USER_ERROR,
})

export const setUserSuccess = (response: IUserResponse): setUserSuccessA => ({
  type: AuthFetchStatus.SET_USER_SUCCESS,
  response,
})
