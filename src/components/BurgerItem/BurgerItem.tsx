import React from 'react'
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Hooks
import useModal from '../../hooks/useModal'
import { useAppDispatch } from '../../redux/store'

// Files and other
import { dataType } from '../../utils/types'
import { SET_BUN, SET_INGREDIENT } from '../../redux/actions/cartActions'

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

  const dispatch = useAppDispatch()

  const handleClick = () => {
    toggleModal()

    data.type === 'bun'
      ? dispatch({ type: SET_BUN, bun: data })
      : dispatch({ type: SET_INGREDIENT, ingredient: data })
  }

  return (
    <li className={styles.wrapper} onClick={handleClick}>
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
  )
}

export default React.memo(BurgerItem)
