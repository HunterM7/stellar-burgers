const BASE_URL = 'norma.nomoreparties.space'

// API links
export const API_URL = `https://${BASE_URL}/api`
export const API_URL_INGREDIENTS = `${API_URL}/ingredients`
export const API_URL_ORDER = `${API_URL}/orders`
export const API_URL_PASSWORD_RESET = `${API_URL}/password-reset`
export const API_URL_PASSWORD_RESET_REQUEST = `${API_URL}/password-reset/reset`

// WebSockets
export const WS_BASE = `wss://${BASE_URL}`
export const WS_ALL_ORDERS = `${WS_BASE}/orders/all`

// API Auth Endpoints
export const API_AUTH_USER = `${API_URL}/auth/user` // эндпоинт получения и обновления данных пользователя.
export const API_AUTH_LOGIN = `${API_URL}/auth/login` // эндпоинт для авторизации.
export const API_AUTH_LOGOUT = `${API_URL}/auth/logout` // эндпоинт для выхода из системы.
export const API_AUTH_REGISTER = `${API_URL}/auth/register` // эндпоинт для регистрации пользователя.
export const API_AUTH_TOKEN = `${API_URL}/auth/token` // эндпоинт обновления токена.

// Routes
export const NOT_FOUND_LINK = '*'
export const HOME_LINK = '/'
export const LOGIN_LINK = '/login'
export const REGISTER_LINK = '/register'
export const FORGOT_PASSWORD_LINK = '/forgot-password'
export const RESET_PASSWORD_LINK = '/reset-password'

export const PROFILE_LINK = '/profile'
export const PROFILE_ORDERS_LINK = `${PROFILE_LINK}/orders`
export const PROFILE_ORDERS_ID_LINK = `${PROFILE_ORDERS_LINK}/:id`

export const INGREDIENT_LINK = '/ingredients'
export const INGREDIENT_PAGE_LINK = `${INGREDIENT_LINK}/:id`
export const ORDER_FEED_LINK = '/feed'
export const ORDER_FEED_ID_LINK = `${ORDER_FEED_LINK}/:id`
export const ORDER_LINK = '/order'
