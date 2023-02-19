import { setCookie } from 'utils/cookie'

export const saveTokens = (accessToken: string, refreshToken: string) => {
  setCookie('token', accessToken.split('Bearer ')[1])
  localStorage.setItem('refreshToken', refreshToken)
}
