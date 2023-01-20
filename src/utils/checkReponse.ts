// Check Response function

export const checkReponse = <Type>(res: Response) => {
  return res.ok
    ? (res.json() as Promise<Type>)
    : res.json().then((err) => Promise.reject(err))
}
