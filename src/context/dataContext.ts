import { createContext } from 'react'

import { dataType } from '../utils/types'

interface DataContextType {
  data: dataType[]
}

export const DataContext = createContext<DataContextType>({
  data: [],
})
