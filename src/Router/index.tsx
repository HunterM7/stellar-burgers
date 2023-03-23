import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// Utils
import {
  FORGOT_PASSWORD_LINK,
  INGREDIENT_PAGE_LINK,
  LOGIN_LINK,
  NOT_FOUND_LINK,
  ORDER_FEED_ID_LINK,
  ORDER_FEED_LINK,
  ORDER_LINK,
  PROFILE_LINK,
  PROFILE_ORDERS_ID_LINK,
  PROFILE_ORDERS_LINK,
  REGISTER_LINK,
  RESET_PASSWORD_LINK,
} from 'utils/data/constants'
import { IUseLocation } from 'utils/types'

// Pages
import {
  ForgotPasswordPage,
  HomePage,
  IngredientPage,
  LoginPage,
  NotFoundPage,
  FeedPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
  OrderPage,
} from 'pages'

// Router
import ProtectedRoute from 'Router/ProtectedRoute/ProtectedRoute'

// Components
import {
  IngredientDetails,
  OrderSummary,
  OrderHistory,
  ProfileInfo,
  OrderDetailsModal,
} from 'components'

const Router: React.FC = () => {
  // useLocation
  const location: IUseLocation = useLocation()
  const background = location.state && location.state.background

  return (
    <>
      <Routes location={background || location}>
        {/* Header routes */}
        <Route index element={<HomePage />} />
        <Route path={ORDER_FEED_LINK} element={<FeedPage />} />
        <Route
          path={PROFILE_LINK}
          element={<ProtectedRoute element={<ProfilePage />} />}
        >
          <Route path={PROFILE_LINK} element={<ProfileInfo />} />
          <Route path={PROFILE_ORDERS_LINK} element={<OrderHistory />} />
        </Route>

        {/* Ingredient details in a separate page */}
        <Route path={INGREDIENT_PAGE_LINK} element={<IngredientPage />} />

        {/* Orders in a separate page */}
        <Route path={ORDER_FEED_ID_LINK} element={<OrderPage />} />
        <Route path={PROFILE_ORDERS_ID_LINK} element={<OrderPage />} />

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
      {!!background && (
        <Routes>
          <Route path={INGREDIENT_PAGE_LINK} element={<IngredientDetails />} />
          <Route path={ORDER_LINK} element={<OrderSummary />} />

          <Route path={ORDER_FEED_ID_LINK} element={<OrderDetailsModal />} />
          <Route
            path={PROFILE_ORDERS_ID_LINK}
            element={<OrderDetailsModal />}
          />
        </Routes>
      )}
    </>
  )
}

export default React.memo(Router)
