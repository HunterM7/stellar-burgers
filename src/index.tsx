import React from 'react'
import ReactDOM from 'react-dom/client'

// Files
import './scss/index.scss'

// Components
import App from './components/App/App'

// Tests
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals()
