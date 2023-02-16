export interface TUseLocation {
  hash: string
  key: string
  pathname: string
  search: string
  state: {
    backgroud?: Location
    target?: Location
    resetPassword?: boolean
  } | null
}
