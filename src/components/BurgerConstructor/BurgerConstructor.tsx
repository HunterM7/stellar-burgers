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
import { RootStateType, useAppDispatch } from '../../redux/store'

// Files and other
import { SET_TOTAL_PRICE } from '../../redux/actions/cartActions'

// Components
import OrderDetails from '../OrderDetails/OrderDetails'

// Styles
import styles from './BurgerConstructor.module.scss'
import IngredientPlug from './IngredientPlug/IngredientPlug'

const BurgerConstructor: React.FC = () => {
  // Redux
  const { bun, ingredients, totalPrice } = useSelector(
    (store: RootStateType) => store.cart,
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
            <IngredientPlug position="top" title="Выберите булку" />
          )}
        </div>

        <div className={styles.ingredients}>
          {burgerIngredients.length ? (
            <ul className={styles.ingredients__container}>
              {burgerIngredients}
            </ul>
          ) : (
            <div className={styles.ingredients__plug}>
              <IngredientPlug title="Добавьте ингридиенты" />
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
            <IngredientPlug position="bottom" title="Выберите булку" />
          )}
        </div>
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

      {isModalActive && bun && (
        <OrderDetails
          ingredients={[bun._id, ...ingredients.map((el) => el._id)]}
          toggleModal={toggleModal}
        />
      )}
    </section>
  )
}

export default BurgerConstructor
