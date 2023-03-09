import { WSActionTypes } from 'redux/actionTypes'

export interface startWSConnectionA {
  type: typeof WSActionTypes.WS_CONNECTION_START
}
export interface successWSConnectionA {
  type: typeof WSActionTypes.WS_CONNECTION_SUCCESS
}
export interface closedWSConnectionA {
  type: typeof WSActionTypes.WS_CONNECTION_CLOSED
}
export interface errorWSConnectionA {
  type: typeof WSActionTypes.WS_CONNECTION_ERROR
  payload: Event
}
export interface getMessageWSA {
  type: typeof WSActionTypes.WS_GET_MESSAGE
  payload: string
}
export interface sendMessageWSA {
  type: typeof WSActionTypes.WS_SEND_MESSAGE
  payload: string
}

export type WSActions =
  | startWSConnectionA
  | successWSConnectionA
  | closedWSConnectionA
  | errorWSConnectionA
  | getMessageWSA
  | sendMessageWSA
