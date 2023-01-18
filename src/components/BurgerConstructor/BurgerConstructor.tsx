import React from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'

// Types
import { RootState, useAppDispatch } from '../../redux/store'

// Files and other
import { SET_TOTAL_PRICE } from '../../redux/actions/cartActions'

// Components
import OrderDetails from '../OrderDetails/OrderDetails'

// Styles
import styles from './BurgerConstructor.module.scss'

const BurgerConstructor: React.FC = () => {
  // Redux
  const { bun, ingredients, totalPrice } = useSelector(
    (store: RootState) => store.cart,
  )

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch({ type: SET_TOTAL_PRICE })
  }, [bun, ingredients, dispatch])

  // Burger contents
  const burgerIngredients = ingredients.map((item, i) => (
    <li key={`${i}-${item._id}`} className={styles.draggableElement}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
      />
    </li>
  ))

  // Modal Window
  const { isModalActive, toggleModal } = useModal(false)

  return (
    <section className={styles.wrapper}>
      <div className={styles.burgerConstructor}>
        {bun._id ? (
          <>
            <div className={styles.blockedElement}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>

            <div className={styles.ingredients}>
              {burgerIngredients.length ? (
                <ul className={styles.ingredients__container}>
                  {burgerIngredients}
                </ul>
              ) : (
                <h2 className={styles.choiceOffer}>Добавьте ингридиенты!</h2>
              )}
            </div>

            <div className={styles.blockedElement}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
          </>
        ) : (
          <h2 className={styles.choiceOffer}>Выберите булку!</h2>
        )}
      </div>

      <div className={styles.orderBox}>
        <div className={styles.price}>
          <span>{totalPrice || 0}</span>
          <CurrencyIcon type="primary" />
        </div>

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={toggleModal}>
          Оформить заказ
        </Button>
      </div>

      {isModalActive && (
        <OrderDetails
          ingredients={[bun._id, ...ingredients.map((el) => el._id)]}
          toggleModal={toggleModal}
        />
      )}
    </section>
  )
}

export default BurgerConstructor
