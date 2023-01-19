import { createContext } from 'react'

import { DataType } from '../utils/types'

interface DataContextType {
  data: DataType[]
}

export const DataContext = createContext<DataContextType>({
  data: [],
})
