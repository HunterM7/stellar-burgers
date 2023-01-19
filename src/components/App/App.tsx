import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Components
import Loader from '../Loader/Loader'
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

// Redux
import { getData } from '../../redux/actions/dataAction'
import { RootStateType } from '../../redux/store'

// Types
import { IngredientType } from '../../redux/actionTypes/types'

// Styles
import styles from './App.module.scss'

export interface BurgerStateType {
  bun: IngredientType
  ingredients: IngredientType[]
  totalPrice: number
}

const App: React.FC = () => {
  const { isLoading, hasError } = useSelector(
    (store: RootStateType) => store.data,
  )

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getData())
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
