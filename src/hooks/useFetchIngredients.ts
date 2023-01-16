import React from 'react'

// Types
import { dataType, hasError, isLoading } from '../utils/types'
import checkReponse from '../utils/checkReponse'

interface stateType {
  data: dataType[]
  isLoading: isLoading
  hasError: hasError
}

const useFetchIngredients = (
  url: string,
): [dataType[], isLoading, hasError] => {
  const [state, setState] = React.useState<stateType>({
    data: [],
    isLoading: true,
    hasError: false,
  })

  React.useEffect(() => {
    fetch(url)
      .then((res) => checkReponse<{ data: dataType[] }>(res))
      .then((json) => {
        //! Remove setTimeout. Only for the Loading example
        setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            isLoading: false,
            data: json.data,
          }))
        }, 1000)
      })
      .catch((error) => {
        //! Remove setTimeout. Only for the Loading example
        setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            isLoading: false,
            hasError: true,
          }))
        }, 1000)
      })
  }, [url])

  return [state.data, state.isLoading, state.hasError]
}

export default useFetchIngredients
