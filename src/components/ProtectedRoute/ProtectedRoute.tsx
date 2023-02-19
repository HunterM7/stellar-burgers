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
  const dispatch = useDispatch()
  const location: TUseLocation = useLocation()
  const isLoggedIn = useSelector(authIsLoggedInSelector)
  const { isLoading, hasError } = useSelector(authSelector)

  const init = React.useCallback(() => {
    dispatch(getUser())
  }, [dispatch])

  React.useEffect(() => {
    init()
  }, [init])

  if (isLoading) return <Loader />

  if (onlyUnAuth && isLoggedIn)
    return <Navigate to={location.state?.target || HOME_LINK} replace />

  if (!onlyUnAuth && !isLoggedIn) {
    // Сервер не ответил
    return <Navigate to={LOGIN_LINK} state={{ target: location }} replace />
  }

  return element
}

export default React.memo(ProtectedRoute)
