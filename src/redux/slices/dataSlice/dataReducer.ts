import { dataType, Status } from './types'

interface stateType {
  data: dataType[]
  status: Status
}

const initialState: stateType = {
  data: [],
  status: Status._REQUEST,
}
