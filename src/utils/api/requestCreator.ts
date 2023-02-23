export type TMethod = 'GET' | 'POST' | 'PATCH'
export type THeaders = object
export type TBody = object

export interface IRequestCreator {
  method: TMethod
  headers?: THeaders
  body?: TBody
}

export const requestCreator = ({ method, headers, body }: IRequestCreator) => {
  return {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    ...(body && { body: JSON.stringify(body) }),
  }
}
