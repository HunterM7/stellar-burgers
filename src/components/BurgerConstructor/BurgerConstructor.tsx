import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// DnD
import { useDrop } from 'react-dnd'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { setBun, setIngredient, setTotalPrice } from 'redux/actionCreators'
import { setOrder } from 'redux/actions'
import {
  cartSelector,
  dataIngreientsSelector,
  authIsLoggedInSelector,
} from 'redux/selectors'

// Routes
import { LOGIN_LINK, ORDER_LINK } from 'utils/constants'

// Components
import { ConstructorItem, ConstructorPlug, PopupHint } from 'components'

// Styles
import styles from './BurgerConstructor.module.scss'

const BurgerConstructor: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Redux
  const allIngredients = useSelector(dataIngreientsSelector)
  const { bun, ingredients, totalPrice } = useSelector(cartSelector)
  const isUserLoggedIn = useSelector(authIsLoggedInSelector)

  React.useEffect(() => {
    dispatch(setTotalPrice())
  }, [bun, ingredients, dispatch])

  // Burger content
  const burgerIngredients = React.useMemo(
    () =>
      ingredients.map((item, i) => (
        <ConstructorItem key={item.uuid} ingredient={item} orderId={i} />
      )),
    [ingredients],
  )

  // DnD
  const [{ isHover }, dropRef] = useDrop(() => ({
    accept: 'INGREDIENT',
    drop: ({ id }: { id: string }) => dropIngredient(id),
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }))

  const dropIngredient = React.useCallback(
    (id: string) => {
      const ingredient = allIngredients.find((el) => el._id === id)

      if (ingredient) {
        ingredient.type === 'bun'
          ? dispatch(setBun(ingredient))
          : dispatch(setIngredient(ingredient))
      }
    },
    [allIngredients, dispatch],
  )

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
      const orderIngridietns = [bun._id, ...ingredients.map((el) => el._id)]

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
      <div
        ref={dropRef}
        className={`
				${styles.burgerConstructor}
				${isHover ? styles['burgerConstructor--hover'] : ''}
			`}
      >
        <div className={styles.blockedElement}>
          {bun ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          ) : (
            <ConstructorPlug position="top" title="Выберите булку" />
          )}
        </div>

        <div className={styles.ingredients}>
          {burgerIngredients.length ? (
            <ul className={styles.ingredients__container}>
              {burgerIngredients}
            </ul>
          ) : (
            <div className={styles.ingredients__plug}>
              <ConstructorPlug title="Добавьте ингридиенты" />
            </div>
          )}
        </div>

        <div className={styles.blockedElement}>
          {bun ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          ) : (
            <ConstructorPlug position="bottom" title="Выберите булку" />
          )}
        </div>
      </div>

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
