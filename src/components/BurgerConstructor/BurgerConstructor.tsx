import React from 'react'
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'

// Files
import { BurgerStateType } from '../App/App'
import { dataType } from '../../utils/types'
import { BurgerContext } from '../../context/burgerContext'

// Components
import OrderDetails from '../OrderDetails/OrderDetails'

// Styles
import styles from './BurgerConstructor.module.scss'

interface BurgerConstructorType {
  burgerState: BurgerStateType
}

const BurgerConstructor: React.FC<BurgerConstructorType> = ({
  burgerState,
}) => {
  // Context
  const { bun, ingredients, totalPrice } = burgerState

  const { dispatch } = React.useContext(BurgerContext)

  React.useEffect(() => {
    dispatch({ type: 'setTotalPrice', payload: {} as dataType })
  }, [bun, ingredients, totalPrice, dispatch])

  // Burger contents
  const burgerIngredients = ingredients.map((item) => (
    <li key={item._id} className={styles.draggableElement}>
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
              <ul className={styles.ingredients__container}>
                {burgerIngredients}
              </ul>
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

      {isModalActive && <OrderDetails toggleModal={toggleModal} />}
    </section>
  )
}

export default BurgerConstructor
