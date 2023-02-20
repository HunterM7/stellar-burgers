export interface IUseLocation {
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
