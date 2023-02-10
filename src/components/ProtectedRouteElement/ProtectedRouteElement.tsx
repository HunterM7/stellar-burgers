import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { getUser } from 'redux/actions'
// import { getUser } from 'redux/actions'
import {
  authIsLoggedInSelector,
  authSelector,
} from 'redux/selectors/authSelectors'
import { useDispatch, useSelector } from 'redux/store'
import { LOGIN_LINK } from 'utils/constants'
import { Loader } from 'components'

type TProtectedRouteElement = {
  element: ReactElement
}

const ProtectedRouteElement: React.FC<TProtectedRouteElement> = ({
  element,
}) => {
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
    return <Navigate to={LOGIN_LINK} replace />

  return element
}

export default React.memo(ProtectedRouteElement)
