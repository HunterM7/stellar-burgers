// Check Response function
export const checkReponse = <T>(res: Response) => {
  return res.ok
    ? (res.json() as Promise<T>)
    : res.json().then((err) => Promise.reject(err))
}
