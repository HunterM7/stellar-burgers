// Actions
import { AuthActions } from 'redux/actions'

// Action Creators
// import {
//   registerRequest,
//   registerError,
//   registerSuccess,
//   loginRequest,
//   loginError,
//   loginSuccess,
//   logoutRequest,
//   logoutError,
//   logoutSuccess,
//   getUserRequest,
//   getUserError,
//   getUserSuccess,
//   setUserRequest,
//   setUserError,
//   setUserSuccess,
// } from 'redux/actionCreators'

// Reducer
import { authReducer, TAuthState } from 'redux/reducers'

describe('Auth Reducer Tests', function () {
  const initialState: TAuthState = {
    user: {
      name: '',
      email: '',
    },
    isLoading: true,
    hasError: false,
  }

  it('should return Initial State', function () {
    expect(authReducer(undefined, {} as AuthActions)).toEqual(initialState)
  })
})
