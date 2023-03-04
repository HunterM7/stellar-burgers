// Redux
import { AppThunk, AppDispatch } from 'redux/store'
import { TAuthLogin, TAuthRegister } from 'redux/reducers'
import {
  AuthFetchStatus,
  IErrorResponse,
  ILoginResponse,
  ILogoutResponse,
  IRegisterResponse,
  ISetUser,
  IUserResponse,
} from 'redux/actionTypes'
import {
  registerError,
  registerRequest,
  registerSuccess,
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
} from 'redux/actionCreators'

// API Endpoints
import {
  API_AUTH_LOGIN,
  API_AUTH_REGISTER,
  API_AUTH_USER,
  API_AUTH_LOGOUT,
} from 'utils/data/constants'

// Utils
import { checkReponse } from 'utils/api/checkReponse'
import { deleteCookie, getCookie } from 'utils/cookie'
import { refreshTokens } from 'utils/auth/refreshTokens'
import { requestCreator } from 'utils/api/requestCreator'
import { saveTokens } from 'utils/auth/saveTokens'

// Register actions
export interface registerRequestA {
  type: typeof AuthFetchStatus.REGISTER_REQUEST
}

export interface registerErrorA {
  type: typeof AuthFetchStatus.REGISTER_ERROR
}

export interface registerSuccessA {
  type: typeof AuthFetchStatus.REGISTER_SUCCESS
  response: IRegisterResponse
}

// Login actions
export interface loginRequestA {
  type: typeof AuthFetchStatus.LOGIN_REQUEST
}

export interface loginErrorA {
  type: typeof AuthFetchStatus.LOGIN_ERROR
}

export interface loginSuccessA {
  type: typeof AuthFetchStatus.LOGIN_SUCCESS
  response: ILoginResponse
}

// Logout actions
export interface logoutRequestA {
  type: typeof AuthFetchStatus.LOGOUT_REQUEST
}

export interface logoutErrorA {
  type: typeof AuthFetchStatus.LOGOUT_ERROR
}

export interface logoutSuccessA {
  type: typeof AuthFetchStatus.LOGOUT_SUCCESS
  response: ILogoutResponse
}

// Get user actions
export interface getUserRequestA {
  type: typeof AuthFetchStatus.GET_USER_REQUEST
}

export interface getUserErrorA {
  type: typeof AuthFetchStatus.GET_USER_ERROR
}

export interface getUserSuccessA {
  type: typeof AuthFetchStatus.GET_USER_SUCCESS
  response: IUserResponse
}

// Set user actions
export interface setUserRequestA {
  type: typeof AuthFetchStatus.SET_USER_REQUEST
}

export interface setUserErrorA {
  type: typeof AuthFetchStatus.SET_USER_ERROR
}

export interface setUserSuccessA {
  type: typeof AuthFetchStatus.SET_USER_SUCCESS
  response: IUserResponse
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

// Thunk
export const handleRegister =
  ({ name, email, password }: TAuthRegister): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(registerRequest())

    const requestOptions = requestCreator({
      method: 'POST',
      body: { name, email, password },
    })

    fetch(API_AUTH_REGISTER, requestOptions)
      .then(res => checkReponse<IRegisterResponse>(res))
      .then(res => {
        saveTokens(res.accessToken, res.refreshToken)

        dispatch(registerSuccess(res))
      })
      .catch(err => dispatch(registerError()))
  }

export const handleLogin =
  ({ email, password }: TAuthLogin): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(loginRequest())

    const requestOptions = requestCreator({
      method: 'POST',
      body: { email, password },
    })

    fetch(API_AUTH_LOGIN, requestOptions)
      .then(res => checkReponse<ILoginResponse>(res))
      .then(res => {
        saveTokens(res.accessToken, res.refreshToken)

        dispatch(loginSuccess(res))
      })
      .catch(err => {
        dispatch(loginError())
      })
  }

export const handleLogout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(logoutRequest())

  const refreshToken = localStorage.getItem('refreshToken')

  if (refreshToken) {
    const requestOptions = requestCreator({
      method: 'POST',
      body: { token: refreshToken },
    })

    fetch(API_AUTH_LOGOUT, requestOptions)
      .then(res => checkReponse<ILogoutResponse>(res))
      .then(res => {
        deleteCookie('token')
        localStorage.removeItem('refreshToken')

        dispatch(logoutSuccess(res))
      })
      .catch(err => {
        dispatch(logoutError())
      })
  }
}

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getUserRequest())

  const requestOptions = requestCreator({
    method: 'GET',
    headers: {
      Authorization: 'Bearer '.concat(getCookie('token') || ''),
    },
  })

  fetch(API_AUTH_USER, requestOptions)
    .then(res => checkReponse<IUserResponse>(res))
    .then(res => dispatch(getUserSuccess(res)))
    .catch((err: IErrorResponse) => {
      if (err.message === 'jwt expired') {
        refreshTokens().then(() => dispatch(getUser()))
      } else {
        dispatch(getUserError())
      }
    })
}

export const setUser =
  ({ name, email, password }: ISetUser): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setUserRequest())

    const requestOptions = requestCreator({
      method: 'PATCH',
      headers: { Authorization: 'Bearer '.concat(getCookie('token') || '') },
      body: { name, email, password },
    })

    fetch(API_AUTH_USER, requestOptions)
      .then(res => checkReponse<IUserResponse>(res))
      .then(res => dispatch(setUserSuccess(res)))
      .catch((err: IErrorResponse) => {
        if (err.message === 'jwt expired') {
          refreshTokens().then(() =>
            dispatch(setUser({ name, email, password })),
          )
        } else {
          dispatch(setUserError())
        }
      })
  }
