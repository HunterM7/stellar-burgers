/* eslint-disable */

interface IProps {
  path?: string
  expires?: Date | string | number
  [propName: string]: any
}

export function setCookie(name: string, value: string, options?: IProps) {
  options = { path: '/', ...options }

  let exp = options.expires

  if (exp && typeof exp == 'number') {
    const date = new Date()
    date.setTime(date.getTime() + exp * 1000)
    exp = options.expires = date
  }

  if (exp instanceof Date) {
    options.expires = exp.toUTCString()
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey

    const optionValue = options[optionKey]

    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  document.cookie = updatedCookie
}

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export const deleteCookie = (name: string) => {
  setCookie(name, '', {
    'max-age': -1,
  })
}
