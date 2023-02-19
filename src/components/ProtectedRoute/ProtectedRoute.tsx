import React, { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// Redux
import { useSelector } from 'redux/store'
import {
  authIsLoggedInSelector,
  authSelector,
} from 'redux/selectors/authSelectors'

// Routes
import { HOME_LINK, LOGIN_LINK } from 'utils/constants'
import { TUseLocation } from 'utils/types'

// Components
import { Loader } from 'components'

type TProtectedRoute = {
  element: ReactElement
  onlyUnAuth?: boolean
}

const ProtectedRoute: React.FC<TProtectedRoute> = ({
  element,
  onlyUnAuth = false,
}) => {
  const location: TUseLocation = useLocation()
  const isLoggedIn = useSelector(authIsLoggedInSelector)
  const { isLoading } = useSelector(authSelector)

  if (isLoading) return <Loader />

  if (onlyUnAuth && isLoggedIn)
    return <Navigate to={location.state?.target || HOME_LINK} replace />

  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to={LOGIN_LINK} state={{ target: location }} replace />
  }

  return element
}

export default React.memo(ProtectedRoute)
