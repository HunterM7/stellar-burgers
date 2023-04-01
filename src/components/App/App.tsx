import React from 'react'

// Redux
import { useDispatch } from 'redux/store'
import { getUser, getIngredients } from 'redux/actions'

// Components
import Router from 'Router'
import { AppHeader } from 'components'

const App: React.FC = () => {
  const dispatch = useDispatch()

  // Checking the freshness of tokens and getting all the ingredients
  React.useEffect(() => {
    dispatch(getUser())
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <Router />
    </>
  )
}

export default App
