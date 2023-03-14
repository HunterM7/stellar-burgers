import React from 'react'

// Redux
import { useDispatch } from 'redux/store'
import { getUser } from 'redux/actions'

// Components
import Router from 'Router'
import { AppHeader } from 'components'

const App: React.FC = () => {
  const dispatch = useDispatch()

  // Checking the freshness of tokens
  React.useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <Router />
    </>
  )
}

export default React.memo(App)
