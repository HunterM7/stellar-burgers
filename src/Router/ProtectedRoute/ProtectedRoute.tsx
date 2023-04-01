import React, { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// Redux
import { useSelector } from 'redux/store'
import { authSelector } from 'redux/selectors'

// Routes
import { HOME_LINK, LOGIN_LINK } from 'utils/data/constants'
import { IUseLocation } from 'utils/types'

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
  const location: IUseLocation = useLocation()
  const { user, isLoading } = useSelector(authSelector)

  if (isLoading) return <Loader />

  if (onlyUnAuth && user)
    return <Navigate to={location.state?.target || HOME_LINK} replace />

  if (!onlyUnAuth && !user)
    return <Navigate to={LOGIN_LINK} state={{ target: location }} replace />

  return element
}

export default React.memo(ProtectedRoute)
