import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Router Links
import { ACCOUNT_LINK, HOME_LINK, ORDER_FEED_LINK } from '../../utils/constants'

// Components and Pages
import AppHeader from '../AppHeader/AppHeader'
import { AccountPage, HomePage } from '../../pages'
import OrderFeedPage from '../../pages/OrderFeedPage/OrderFeedPage'

// Styles
// import styles from './App.module.scss'

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path={HOME_LINK} element={<HomePage />} />
        <Route path={ORDER_FEED_LINK} element={<OrderFeedPage />} />
        <Route path={ACCOUNT_LINK} element={<AccountPage />} />
      </Routes>
    </>
  )
}

export default App
