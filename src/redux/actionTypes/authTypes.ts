export interface IRegisterResponse {
  success: boolean
  user: {
    email: string
    name: string
  }
  accessToken: string
  refreshToken: string
}

export interface ILoginResponse {
  success: boolean
  user: {
    email: string
    name: string
  }
  accessToken: string
  refreshToken: string
}

export interface ILogoutResponse {
  success: boolean
  message: string
}

export interface IUserResponse {
  success: boolean
  user: {
    email: string
    name: string
  }
}

export interface ISetUser {
  name: string
  email: string
  password: string
}

export interface IErrorResponse {
  success: boolean
  message: string
}

export enum AuthFetchStatus {
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',

  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',

  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR',

  GET_USER_REQUEST = 'GET_USER_REQUEST',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_ERROR = 'GET_USER_ERROR',

  SET_USER_REQUEST = 'SET_USER_REQUEST',
  SET_USER_SUCCESS = 'SET_USER_SUCCESS',
  SET_USER_ERROR = 'SET_USER_ERROR',
}
