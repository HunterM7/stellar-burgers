import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Routes
import {
  FORGOT_PASSWORD_LINK,
  HOME_LINK,
  LOGIN_LINK,
  ORDER_FEED_LINK,
  PROFILE_LINK,
  REGISTER_LINK,
  RESET_PASSWORD_LINK,
} from '../../utils/constants'

// Components and Pages
import AppHeader from '../AppHeader/AppHeader'
import {
  AccountPage,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  OrderFeedPage,
  RegisterPage,
  ResetPasswordPage,
} from '../../pages'

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path={HOME_LINK} element={<HomePage />} />
        <Route path={ORDER_FEED_LINK} element={<OrderFeedPage />} />
        <Route path={PROFILE_LINK} element={<AccountPage />} />

        {/* Authentication routes */}
        <Route path={LOGIN_LINK} element={<LoginPage />} />
        <Route path={REGISTER_LINK} element={<RegisterPage />} />
        <Route path={FORGOT_PASSWORD_LINK} element={<ForgotPasswordPage />} />
        <Route path={RESET_PASSWORD_LINK} element={<ResetPasswordPage />} />
      </Routes>
    </>
  )
}

export default App
