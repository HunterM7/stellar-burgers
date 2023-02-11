import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

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

type TUnprotectedRouteElement = {
  element: ReactElement
}

const UnprotectedRouteElement: React.FC<TUnprotectedRouteElement> = ({
  element,
}) => {
  const isLoggedIn = useSelector(authIsLoggedInSelector)
  const { isLoading } = useSelector(authSelector)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  if (isLoading) return <Loader />
  if (!isLoading && isLoggedIn) return <Navigate to={HOME_LINK} replace />

  return element
}

export default React.memo(UnprotectedRouteElement)
