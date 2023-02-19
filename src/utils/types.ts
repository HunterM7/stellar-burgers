export interface TUseLocation {
  hash: string
  key: string
  pathname: string
  search: string
  state: {
    background?: Location
    target?: Location
    resetPassword?: boolean
  } | null
}
