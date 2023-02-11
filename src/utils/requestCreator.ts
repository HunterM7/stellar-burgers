type TMethod = 'GET' | 'POST' | 'PATCH'
type THeaders = object
type TBody = object

export const requestCreator = (
  method: TMethod,
  headers?: THeaders,
  body?: TBody,
) => {
  return {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    ...(body && { body: JSON.stringify(body) }),
  }
}
