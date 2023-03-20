// Check Response function

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok
    ? (res.json() as Promise<T>)
    : res.json().then(error => Promise.reject(error))
}
