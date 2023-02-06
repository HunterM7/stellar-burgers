import React, { useCallback } from 'react'
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// DnD
import { useDrop } from 'react-dnd'

// Hooks
import useModal from 'hooks/useModal'

// Redux
import { TIngredientCart } from 'redux/actionTypes'
import { useDispatch, useSelector } from 'redux/store'
import { setBun, setIngredient, setTotalPrice } from 'redux/actionCreators'
import { setOrder } from 'redux/actions'
import { cartSelector, dataIngreientsSelector } from 'redux/selectors'

// Components
import {
  ConstructorItem,
  ConstructorPlug,
  OrderDetails,
  PopupHint,
} from 'components'

// Styles
import styles from './BurgerConstructor.module.scss'

const BurgerConstructor: React.FC = () => {
  // Redux
  const allIngredients = useSelector(dataIngreientsSelector)
  const { bun, ingredients, totalPrice } = useSelector(cartSelector)

  const dispatch = useDispatch()

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

  const dropIngredient = (id: string) => {
    const ingredient = allIngredients.find((el) => el._id === id)

    if (ingredient) {
      ingredient.type === 'bun'
        ? dispatch(setBun(ingredient))
        : dispatch(setIngredient({ ...ingredient, uuid: crypto.randomUUID() }))
    }
  }

  // Modal Window
  const { isModalOpen, openModal, closeModal } = useModal(false)

  // Popup Hint Modal
  const initialPopupState = {
    isPopupActive: false,
    title: '',
  }

  const [popupState, setPopupState] = React.useState(initialPopupState)

  const closePopup = () =>
    setTimeout(() => setPopupState(initialPopupState), 4000)

  // Handle order click
  const handleOrderClick = () => {
    if (!bun && !ingredients.length) {
      setPopupState({
        isPopupActive: true,
        title: 'Выберите булку и хотя бы 1 ингридиент!',
      })
      closePopup()
    } else if (!bun) {
      setPopupState({
        isPopupActive: true,
        title: 'Выберите булку!',
      })
      closePopup()
    } else if (!ingredients.length) {
      setPopupState({
        isPopupActive: true,
        title: 'Выберите хотя бы 1 ингридиент!',
      })
      closePopup()
    } else {
      const orderIngridietns = [bun._id, ...ingredients.map((el) => el._id)]

      dispatch(setOrder(orderIngridietns))
      openModal && openModal()
    }
  }

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

      {isModalOpen && bun && <OrderDetails closeModal={closeModal} />}
      {popupState.isPopupActive && <PopupHint title={popupState.title} />}
    </section>
  )
}

export default React.memo(BurgerConstructor)
