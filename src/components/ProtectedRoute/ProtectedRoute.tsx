import React, { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { getUser } from 'redux/actions'
import {
  authIsLoggedInSelector,
  authSelector,
} from 'redux/selectors/authSelectors'

// Routes
import { LOGIN_LINK } from 'utils/constants'

// Components
import { Loader } from 'components'

type TProtectedRoute = {
  element: ReactElement
}

const ProtectedRoute: React.FC<TProtectedRoute> = ({ element }) => {
  const location = useLocation()
  const isLoggedIn = useSelector(authIsLoggedInSelector)
  const { isLoading, hasError } = useSelector(authSelector)
  const dispatch = useDispatch()

  const init = React.useCallback(() => {
    dispatch(getUser())
  }, [dispatch])

  React.useEffect(() => {
    init()
  }, [init])

  if (isLoading) return <Loader />
  if (hasError || (!isLoading && !isLoggedIn))
    return <Navigate to={LOGIN_LINK} state={{ target: location }} replace />

  return element
}

export default React.memo(ProtectedRoute)
