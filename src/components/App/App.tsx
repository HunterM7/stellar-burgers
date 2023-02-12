import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// Routes
import {
  FORGOT_PASSWORD_LINK,
  HOME_LINK,
  INGREDIENT_PAGE_LINK,
  LOGIN_LINK,
  NOT_FOUND_LINK,
  ORDER_FEED_LINK,
  PROFILE_LINK,
  PROFILE_ORDERS_LINK,
  REGISTER_LINK,
  RESET_PASSWORD_LINK,
} from 'utils/constants'

// Components and Pages
import {
  AppHeader,
  OrderHistory,
  ProfileInfo,
  ProtectedRouteElement,
  UnprotectedRouteElement,
} from 'components'
import {
  AccountPage,
  ForgotPasswordPage,
  HomePage,
  IngredientPage,
  LoginPage,
  NotFoundPage,
  OrderFeedPage,
  RegisterPage,
  ResetPasswordPage,
} from 'pages'

const App: React.FC = () => {
  const location = useLocation()
  // eslint-disable-next-line
  const background = location.state && location.state.background

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={HOME_LINK} element={<HomePage />} />
        <Route path={ORDER_FEED_LINK} element={<OrderFeedPage />} />

        <Route
          path={PROFILE_LINK}
          element={<ProtectedRouteElement element={<AccountPage />} />}
        >
          <Route path={PROFILE_LINK} element={<ProfileInfo />} />
          <Route path={PROFILE_ORDERS_LINK} element={<OrderHistory />} />
        </Route>

        <Route path={INGREDIENT_PAGE_LINK} element={<IngredientPage />} />

        {/* Authentication routes */}
        <Route
          path={LOGIN_LINK}
          element={<UnprotectedRouteElement element={<LoginPage />} />}
        />
        <Route
          path={REGISTER_LINK}
          element={<UnprotectedRouteElement element={<RegisterPage />} />}
        />
        <Route
          path={FORGOT_PASSWORD_LINK}
          element={<UnprotectedRouteElement element={<ForgotPasswordPage />} />}
        />
        <Route
          path={RESET_PASSWORD_LINK}
          element={<UnprotectedRouteElement element={<ResetPasswordPage />} />}
        />

        {/* Not Found Page */}
        <Route path={NOT_FOUND_LINK} element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default React.memo(App)
