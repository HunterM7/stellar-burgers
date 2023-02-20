import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// Utils
import {
  FORGOT_PASSWORD_LINK,
  INGREDIENT_PAGE_LINK,
  LOGIN_LINK,
  NOT_FOUND_LINK,
  ORDER_FEED_LINK,
  ORDER_LINK,
  PROFILE_LINK,
  PROFILE_ORDERS_LINK,
  REGISTER_LINK,
  RESET_PASSWORD_LINK,
} from 'utils/constants'
import { TUseLocation } from 'utils/types'

// Pages
import {
  ForgotPasswordPage,
  HomePage,
  IngredientPage,
  LoginPage,
  NotFoundPage,
  OrderFeedPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
} from 'pages'

// Components
import {
  IngredientDetails,
  OrderDetails,
  OrderHistory,
  ProfileInfo,
  ProtectedRoute,
} from 'components'

const Router: React.FC = () => {
  // useLocation
  const location: TUseLocation = useLocation()
  const background = location.state && location.state.background

  return (
    <>
      <Routes location={background || location}>
        <Route index element={<HomePage />} />
        <Route path={ORDER_FEED_LINK} element={<OrderFeedPage />} />

        <Route
          path={PROFILE_LINK}
          element={<ProtectedRoute element={<ProfilePage />} />}
        >
          <Route path={PROFILE_LINK} element={<ProfileInfo />} />
          <Route path={PROFILE_ORDERS_LINK} element={<OrderHistory />} />
        </Route>

        <Route path={INGREDIENT_PAGE_LINK} element={<IngredientPage />} />

        {/* Authentication routes */}
        <Route
          path={LOGIN_LINK}
          element={<ProtectedRoute onlyUnAuth element={<LoginPage />} />}
        />
        <Route
          path={REGISTER_LINK}
          element={<ProtectedRoute onlyUnAuth element={<RegisterPage />} />}
        />
        <Route
          path={FORGOT_PASSWORD_LINK}
          element={
            <ProtectedRoute onlyUnAuth element={<ForgotPasswordPage />} />
          }
        />
        <Route
          path={RESET_PASSWORD_LINK}
          element={
            <ProtectedRoute onlyUnAuth element={<ResetPasswordPage />} />
          }
        />

        {/* Not Found Page */}
        <Route path={NOT_FOUND_LINK} element={<NotFoundPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path={INGREDIENT_PAGE_LINK} element={<IngredientDetails />} />
          <Route path={ORDER_LINK} element={<OrderDetails />} />
        </Routes>
      )}
    </>
  )
}

export default React.memo(Router)
