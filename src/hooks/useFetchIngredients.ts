import React from 'react'

import { dataType } from '../utils/data'

type data = dataType[]
type isLoading = boolean
type hasError = boolean

interface stateType {
  data: data
  isLoading: isLoading
  hasError: hasError
}

const useFetchIngredients = (url: string): [data, isLoading, hasError] => {
  const [state, setState] = React.useState<stateType>({
    data: [],
    isLoading: true,
    hasError: false,
  })

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json() as Promise<{ data: dataType[] }>)
      .then((json) => {
        //! Remove setTimeout
        setTimeout(() => {
          setState({ ...state, isLoading: false, data: json.data })
        }, 1000)
      })
      .catch((error) => {
        //! Remove setTimeout
        setTimeout(() => {
          setState({ ...state, isLoading: false, hasError: true })
        }, 1000)
      })
  }, [url])

  return [state.data, state.isLoading, state.hasError]
}

export default useFetchIngredients
