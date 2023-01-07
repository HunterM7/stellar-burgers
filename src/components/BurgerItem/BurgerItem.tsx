import React from 'react'

// Yandex Components
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'

// Files
import { dataType } from '../../utils/data'

// Components
import IngredientDetails from '../IngredientDetails/IngredientDetails'

import styles from './BurgerItem.module.scss'

const BurgerItem: React.FC<dataType> = (data) => {
  // Count of BurgerItem
  const [count] = React.useState<number>(0)

  // Modal Window
  const { isModalActive, toggleModal } = useModal(false)

  return (
    <>
      <li className={styles.wrapper} onClick={toggleModal}>
        <img src={data.image} alt="Ingredient" className={styles.img} />

        <div className={styles.price}>
          {data.price}
          <CurrencyIcon type="primary" />
        </div>

        <p className={styles.title}>{data.name}</p>

        {count ? <Counter count={count} size="default" /> : null}
      </li>

      {isModalActive && (
        <IngredientDetails data={data} toggleModal={toggleModal} />
      )}
    </>
  )
}

export default BurgerItem
