import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Components
import Loader from '../Loader/Loader'
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

// Redux
import { getIngredients } from '../../redux/actions/dataActions'
import { RootStateType } from '../../redux/store'

// Types
import { TIngredient } from '../../redux/actionTypes/types'

// Styles
import styles from './App.module.scss'

export interface BurgerStateType {
  bun: TIngredient
  ingredients: TIngredient[]
  totalPrice: number
}

const App: React.FC = () => {
  const { isLoading, hasError } = useSelector(
    (store: RootStateType) => store.data,
  )

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <main className={`container ${styles.main}`}>
        {isLoading ? (
          <Loader />
        ) : hasError ? (
          <h2>Что-то пошло не так</h2>
        ) : (
          <>
            <h2 className={styles.title}>Соберите бургер</h2>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        )}
      </main>
    </>
  )
}

export default App
