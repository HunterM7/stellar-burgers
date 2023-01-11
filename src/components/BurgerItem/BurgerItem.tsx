import React from 'react'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'

// Files
import { dataType } from '../../utils/types'

// Components
import IngredientDetails from '../IngredientDetails/IngredientDetails'

// Styles
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

        {isModalActive && (
          <IngredientDetails data={data} toggleModal={toggleModal} />
        )}
      </li>
    </>
  )
}

export default BurgerItem
