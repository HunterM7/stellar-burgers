import React, { useContext } from 'react'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'

// Files
import { dataType } from '../../utils/types'
import { BurgerContext } from '../../context/burgerContext'

// Components
import IngredientDetails from '../IngredientDetails/IngredientDetails'

// Styles
import styles from './BurgerItem.module.scss'

interface BurgerItemType {
  data: dataType
}

const BurgerItem: React.FC<BurgerItemType> = ({ data }) => {
  // Count of BurgerItem
  const [count] = React.useState<number>(0)

  // Modal Window
  const { isModalActive, toggleModal } = useModal(false)

  // Context
  const { dispatchBurger } = useContext(BurgerContext)

  return (
    <>
      <li
        className={styles.wrapper}
        onClick={() => {
          toggleModal()

          data.type === 'bun'
            ? dispatchBurger({ type: 'setBun', bun: data })
            : dispatchBurger({ type: 'setIngredient', ingredient: data })
        }}>
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
