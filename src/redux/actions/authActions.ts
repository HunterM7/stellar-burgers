// Redux
import { AppThunk, AppDispatch } from 'redux/store'
import { TAuthLogin, TAuthRegister } from 'redux/reducers'
import { AuthFetchStatus } from 'redux/actionTypes'
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
import {
  ILoginResponse,
  ILogoutResponse,
  IRegisterResponse,
  ISetUser,
  IUserResponse,
} from 'utils/types'
import { IRequestCreator } from 'utils/api/requestCreator'
import { customFetch } from 'utils/api/customFetch'
import { fetchWithRefresh } from 'utils/api/fetchWithRefresh'
import { saveTokens } from 'utils/auth/saveTokens'
import { getCookie, deleteCookie } from 'utils/cookie'

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

    const requestOptions: IRequestCreator = {
      method: 'POST',
      body: { name, email, password },
    }

    customFetch<IRegisterResponse>(API_AUTH_REGISTER, requestOptions)
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

    const requestOptions: IRequestCreator = {
      method: 'POST',
      body: { email, password },
    }

    customFetch<ILoginResponse>(API_AUTH_LOGIN, requestOptions)
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
    const requestOptions: IRequestCreator = {
      method: 'POST',
      body: { token: refreshToken },
    }

    customFetch<ILogoutResponse>(API_AUTH_LOGOUT, requestOptions)
      .then(res => {
        deleteCookie('accessToken')
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

  const requestOptions: IRequestCreator = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer '.concat(getCookie('accessToken') || ''),
    },
  }

  fetchWithRefresh<IUserResponse>(API_AUTH_USER, requestOptions)
    .then(res => dispatch(getUserSuccess(res)))
    .catch(() => dispatch(getUserError()))
}

export const setUser =
  ({ name, email, password }: ISetUser): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(setUserRequest())

    const requestOptions: IRequestCreator = {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer '.concat(getCookie('accessToken') || ''),
      },
      body: { name, email, password },
    }

    fetchWithRefresh<IUserResponse>(API_AUTH_USER, requestOptions)
      .then(res => dispatch(setUserSuccess(res)))
      .catch(() => dispatch(setUserError()))
  }
