import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { authUserSelector, cartSelector } from 'redux/selectors'
import { setOrder } from 'redux/actions'

// Utils
import { LOGIN_LINK, ORDER_LINK } from 'utils/data/constants'

// Components
import { PriceCard } from 'ui'
import { PopupHint } from 'components'

// Styles
import styles from './ConstructorFooter.module.scss'

const ConstructorFooter: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Redux
  const { bun, ingredients } = useSelector(cartSelector)

  // Ingredients
  const cartIngredients = (function () {
    if (bun && ingredients) return [bun, ...ingredients, bun]

    if (bun) return [bun, bun]

    if (ingredients) return ingredients

    return null
  })()

  // Auth checker
  const user = useSelector(authUserSelector)

  // Popup Hint Modal
  const initialPopupState = React.useMemo(
    () => ({
      isPopupActive: false,
      title: '',
    }),
    [],
  )

  const [popupState, setPopupState] = React.useState(initialPopupState)

  // Handle order click
  const handleOrderClick = React.useCallback(() => {
    const handlePopup = (title: string) => {
      setPopupState({
        isPopupActive: true,
        title,
      })
      setTimeout(() => setPopupState(initialPopupState), 4000)
    }

    if (!bun && !ingredients)
      handlePopup('Выберите булку и хотя бы 1 ингридиент!')
    else if (!bun) handlePopup('Выберите булку!')
    else if (!ingredients) handlePopup('Выберите хотя бы 1 ингридиент!')
    else if (!user) navigate(LOGIN_LINK)
    else {
      const orderIngridietns = [
        bun._id,
        ...ingredients.map(el => el._id),
        bun._id,
      ]

      dispatch(setOrder(orderIngridietns))
      navigate(ORDER_LINK, { state: { background: location } })
    }
  }, [bun, ingredients, user, navigate, initialPopupState, dispatch, location])

  return (
    <div className={styles.orderBox}>
      <PriceCard size="medium" ingredients={cartIngredients || []} />

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

export default ConstructorFooter
