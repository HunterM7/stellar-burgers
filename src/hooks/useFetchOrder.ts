import React from 'react'

import checkReponse from '../utils/checkReponse'

interface orderResponseType {
  name: string
  order: {
    number: number
  }
}

interface dataType {
  name: string
  order: number
}

interface stateType {
  data: dataType
  isLoading: boolean
  hasError: boolean
}

const useFetchOrder = (
  url: string,
  ingredients: string[],
): [dataType, boolean, boolean] => {
  const [state, setState] = React.useState<stateType>({
    data: {
      name: 'Идентификатор заказа',
      order: 0,
    },
    isLoading: true,
    hasError: false,
  })

  React.useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    }

    fetch(url, requestOptions)
      .then((res) => checkReponse<orderResponseType>(res))
      .then((json) => {
        setState((prev) => ({
          ...prev,
          data: {
            name: json.name,
            order: json.order.number,
          },
          isLoading: false,
        }))
      })
      .catch((error) =>
        setState((prev) => ({
          ...prev,
          isLoading: false,
          hasError: true,
        })),
      )
  }, [url, ingredients])

  return [state.data, state.isLoading, state.hasError]
}

export default useFetchOrder
