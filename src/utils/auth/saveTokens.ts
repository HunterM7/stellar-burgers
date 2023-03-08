import { setCookie } from 'utils/cookie'

export const saveTokens = (accessToken: string, refreshToken: string) => {
  setCookie('accessToken', accessToken.split('Bearer ')[1])
  localStorage.setItem('refreshToken', refreshToken)
}
