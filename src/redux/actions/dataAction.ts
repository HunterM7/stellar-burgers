import { API_URL_INGREDIENTS } from '../../utils/constants'
import { Status } from '../actionTypes/types'
import { dataType } from '../../utils/types'
import checkReponse from '../../utils/checkReponse'

/* eslint-disable */

// Наш первый thunk
export function getData() {
  return function (dispatch) {
    dispatch({
      type: Status._REQUEST,
    })

    fetch(API_URL_INGREDIENTS)
      .then((res) => checkReponse<{ data: dataType[] }>(res))
      .then((res) => {
        dispatch({
          type: Status._SUCCESS,
          data: res.data,
        })
      })
      .catch((err) => {
        // Если сервер не вернул данных, также отправляем экшен об ошибке
        dispatch({
          type: Status._ERROR,
        })
      })
  }
}
