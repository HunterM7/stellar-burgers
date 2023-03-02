import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { authIsLoggedInSelector, cartSelector } from 'redux/selectors'
import { setOrder } from 'redux/actions'
import { setTotalPrice } from 'redux/actionCreators'

// Utils
import { LOGIN_LINK, ORDER_LINK } from 'utils/data/constants'

// Components
import { PopupHint } from 'components'

// Styles
import styles from './ConstructorFooter.module.scss'

const ConstructorFooter: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Redux
  const { bun, ingredients, totalPrice } = useSelector(cartSelector)

  React.useEffect(() => {
    dispatch(setTotalPrice())
  }, [bun, ingredients, dispatch])

  const isUserLoggedIn = useSelector(authIsLoggedInSelector)

  // Popup Hint Modal
  const initialPopupState = React.useMemo(
    () => ({
      isPopupActive: false,
      title: '',
    }),
    [],
  )

  const [popupState, setPopupState] = React.useState(initialPopupState)

  const handlePopup = React.useCallback(
    (title: string) => {
      setPopupState({
        isPopupActive: true,
        title,
      })
      setTimeout(() => setPopupState(initialPopupState), 4000)
    },
    [initialPopupState],
  )

  // Handle order click
  const handleOrderClick = React.useCallback(() => {
    if (!bun && !ingredients.length)
      handlePopup('Выберите булку и хотя бы 1 ингридиент!')
    else if (!bun) handlePopup('Выберите булку!')
    else if (!ingredients.length) handlePopup('Выберите хотя бы 1 ингридиент!')
    else if (!isUserLoggedIn) navigate(LOGIN_LINK)
    else {
      const orderIngridietns = [bun._id, ...ingredients.map(el => el._id)]

      dispatch(setOrder(orderIngridietns))
      navigate(ORDER_LINK, { state: { background: location } })
    }
  }, [
    bun,
    ingredients,
    isUserLoggedIn,
    location,
    handlePopup,
    navigate,
    dispatch,
  ])

  return (
    <div className={styles.orderBox}>
      <div className={styles.price}>
        <span>{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>

      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={handleOrderClick}
      >
        Оформить заказ
      </Button>

      {popupState.isPopupActive && <PopupHint title={popupState.title} />}
    </div>
  )
}

export default React.memo(ConstructorFooter)
