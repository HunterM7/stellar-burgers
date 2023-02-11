import { setCookie } from 'utils/cookie'

export const saveTokens = (accessToken: string, refreshToken: string) => {
  setCookie('token', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}
