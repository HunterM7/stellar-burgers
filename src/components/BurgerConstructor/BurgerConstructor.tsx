import React from 'react'
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'

// Types
import { useDispatch, useSelector } from '../../redux/store'

// Files and other
import {
  removeIngredient,
  setTotalPrice,
} from '../../redux/actionCreators/cartActionCreators'

// Components
import OrderDetails from '../OrderDetails/OrderDetails'

import ConstructorPlug from './ConstructorPlug/ConstructorPlug'

// Styles
import styles from './BurgerConstructor.module.scss'
import { setOrder } from '../../redux/actions/orderActions'

const BurgerConstructor: React.FC = () => {
  // Redux
  const { bun, ingredients, totalPrice } = useSelector((store) => store.cart)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setTotalPrice())
  }, [bun, ingredients, dispatch])

  // Burger contents
  const burgerIngredients = ingredients.map((item) => (
    <li key={item.uuid} className={styles.draggableElement}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => dispatch(removeIngredient(item.uuid))}
      />
    </li>
  ))

  // Modal Window
  const { isModalOpen, openModal, closeModal } = useModal(false)

  // Handle order click
  //! Добавить всплывающую подсказку вместо console.log()
  const handleOrderClick = () => {
    if (!bun && !ingredients.length) {
      console.log('Выберите булку и хотя бы 1 ингридиент!')
    } else if (!bun) {
      console.log('Выберите булку!')
    } else if (!ingredients.length) {
      console.log('Выберите хотя бы 1 ингридиент!')
    } else {
      const orderIngridietns = [bun._id, ...ingredients.map((el) => el._id)]

      dispatch(setOrder(orderIngridietns))
      openModal()
    }
  }

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
          <span>{totalPrice || 0}</span>
          <CurrencyIcon type="primary" />
        </div>

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOrderClick}>
          Оформить заказ
        </Button>
      </div>

      {isModalOpen && bun && <OrderDetails closeModal={closeModal} />}
    </section>
  )
}

export default BurgerConstructor
