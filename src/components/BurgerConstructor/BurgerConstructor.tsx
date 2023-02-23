import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { setTotalPrice } from 'redux/actionCreators'
import { setOrder } from 'redux/actions'
import { cartSelector, authIsLoggedInSelector } from 'redux/selectors'

// Routes
import { LOGIN_LINK, ORDER_LINK } from 'utils/data/constants'

// Components
import { ConstructorBody, PopupHint } from 'components'

// Styles
import styles from './BurgerConstructor.module.scss'

const BurgerConstructor: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Redux
  const { bun, ingredients, totalPrice } = useSelector(cartSelector)
  const isUserLoggedIn = useSelector(authIsLoggedInSelector)

  React.useEffect(() => {
    dispatch(setTotalPrice())
  }, [bun, ingredients, dispatch])

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
    <section className={styles.wrapper}>
      <ConstructorBody />

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
      </div>

      {popupState.isPopupActive && <PopupHint title={popupState.title} />}
    </section>
  )
}

export default React.memo(BurgerConstructor)
