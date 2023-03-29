// Actions
import { AuthActions } from 'redux/actions'

// Action Creators
import {
  registerRequest,
  registerError,
  registerSuccess,
  loginRequest,
  loginError,
  loginSuccess,
  logoutRequest,
  logoutError,
  logoutSuccess,
  getUserRequest,
  getUserError,
  getUserSuccess,
  setUserRequest,
  setUserError,
  setUserSuccess,
} from 'redux/actionCreators'

// Reducer
import { authReducer as reducer, TAuthState } from 'redux/reducers'

// Types
import {
  ILoginResponse,
  ILogoutResponse,
  IRegisterResponse,
  IUserResponse,
} from 'utils/types'

describe('Auth Reducer Tests', function () {
  const initialState: TAuthState = {
    user: null,
    isLoading: true,
    hasError: false,
  }

  const errorState: TAuthState = {
    ...initialState,
    isLoading: false,
    hasError: true,
  }

  const testUser = { name: 'test name', email: 'test email' }

  const stateWithUser: TAuthState = {
    ...initialState,
    user: testUser,
    isLoading: false,
  }

  const logoutState: TAuthState = {
    ...initialState,
    isLoading: false,
  }

  it('should return Initial State', function () {
    expect(reducer(undefined, {} as AuthActions)).toEqual(initialState)
  })

  // Register Tests
  it('should handle REGISTER_REQUEST', function () {
    expect(reducer(initialState, registerRequest())).toEqual(initialState)
  })

  it('should handle REGISTER_ERROR', function () {
    expect(reducer(initialState, registerError())).toEqual(errorState)
  })

  it('should handle REGISTER_SUCCESS', function () {
    expect(
      reducer(
        initialState,
        registerSuccess({ user: testUser } as IRegisterResponse),
      ),
    ).toEqual(stateWithUser)
  })

  // Login Tests
  it('should handle LOGIN_REQUEST', function () {
    expect(reducer(initialState, loginRequest())).toEqual(initialState)
  })

  it('should handle LOGIN_ERROR', function () {
    expect(reducer(initialState, loginError())).toEqual(errorState)
  })

  it('should handle LOGIN_SUCCESS', function () {
    expect(
      reducer(initialState, loginSuccess({ user: testUser } as ILoginResponse)),
    ).toEqual(stateWithUser)
  })

  // Logout Tests
  it('should handle LOGOUT_REQUEST', function () {
    expect(reducer(initialState, logoutRequest())).toEqual(initialState)
  })

  it('should handle LOGOUT_ERROR', function () {
    expect(reducer(initialState, logoutError())).toEqual(errorState)
  })

  it('should handle LOGOUT_SUCCESS', function () {
    expect(
      reducer(stateWithUser, logoutSuccess({} as ILogoutResponse)),
    ).toEqual(logoutState)
  })

  // Get User Tests
  it('should handle GET_USER_REQUEST', function () {
    expect(reducer(initialState, getUserRequest())).toEqual(initialState)
  })

  it('should handle GET_USER_ERROR', function () {
    expect(reducer(initialState, getUserError())).toEqual(errorState)
  })

  it('should handle GET_USER_SUCCESS', function () {
    expect(
      reducer(
        initialState,
        getUserSuccess({ user: testUser } as IUserResponse),
      ),
    ).toEqual(stateWithUser)
  })

  // Set User Tests
  it('should handle SET_USER_REQUEST', function () {
    expect(reducer(initialState, setUserRequest())).toEqual(initialState)
  })

  it('should handle SET_USER_ERROR', function () {
    expect(reducer(initialState, setUserError())).toEqual(errorState)
  })

  it('should handle SET_USER_SUCCESS', function () {
    expect(
      reducer(
        initialState,
        setUserSuccess({ user: testUser } as IUserResponse),
      ),
    ).toEqual(stateWithUser)
  })
})
