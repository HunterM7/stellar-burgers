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
import { HOME_LINK } from 'utils/constants'

// Components
import { Loader } from 'components'
import { TUseLocation } from 'utils/types'

type TUnprotectedRoute = {
  element: ReactElement
}

const UnprotectedRoute: React.FC<TUnprotectedRoute> = ({ element }) => {
  const dispatch = useDispatch()
  const location: TUseLocation = useLocation()
  const isLoggedIn = useSelector(authIsLoggedInSelector)
  const { isLoading } = useSelector(authSelector)

  React.useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  if (isLoading) return <Loader />
  if (!isLoading && isLoggedIn)
    return <Navigate to={location.state?.target || HOME_LINK} replace />

  return element
}

export default React.memo(UnprotectedRoute)
