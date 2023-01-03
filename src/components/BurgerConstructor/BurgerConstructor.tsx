import React from 'react'

// Hooks
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

import useModal from '../../hooks/useModal'

// Files
import { data } from '../../utils/data'

// Yandex Components

// Components
import OrderDetails from '../OrderDetails/OrderDetails'

import styles from './BurgerConstructor.module.scss'

const BurgerConstructor: React.FC = () => {
  // Burger contents
  const burgerContents = data
    .filter((item) => item.type === 'sause' || item.type === 'main')
    .map((item) => (
      <div key={item._id} className={styles.draggableElement}>
        <DragIcon type="primary" />
        <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
      </div>
    ))

  // Modal Window
  const { isModalActive, toggleModal } = useModal(false)

  return (
    <section className={styles.wrapper}>
      <div className={styles.burgerConstructor}>
        <div className={styles.blockedElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={data[0].image}
          />
        </div>

        <div className={styles.burgerConstructor__items}>{burgerContents}</div>

        <div className={styles.blockedElement}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={data[0].image}
          />
        </div>
      </div>

      <div className={styles.orderBox}>
        <div className={styles.price}>
          <span>610</span>
          <CurrencyIcon type="primary" />
        </div>

        <Button htmlType="button" type="primary" size="large" onClick={toggleModal}>
          Оформить заказ
        </Button>
      </div>

      {isModalActive && <OrderDetails toggleModal={toggleModal} />}
    </section>
  )
}

export default BurgerConstructor
