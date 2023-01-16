export interface dataType {
  _id: string
  name: string
  type: string
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
  __v: number
}

export enum Status {
  _REQUEST = '_REQUEST',
  _SUCCESS = '_SUCCESS',
  _ERROR = '_ERROR',
}
