import { TIngredient } from 'redux/actionTypes'

export interface IUseLocation {
  hash: string
  key: string
  pathname: string
  search: string
  state: {
    background?: Location
    target?: Location
    resetPassword?: boolean
  } | null
}

export interface IIngredientsRespose {
  succes: boolean
  data: TIngredient[]
}

// Auth backend responses
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
