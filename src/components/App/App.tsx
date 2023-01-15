import React from 'react'

// Components
import Loader from '../Loader/Loader'
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

// Hooks
import useFetchIngredients from '../../hooks/useFetchIngredients'

// Context
import { DataContext } from '../../context/dataContext'
import {
  BurgerContext,
  burgerReducer,
  initialBurgerState,
} from '../../context/burgerContext'

// Types
import { dataType } from '../../utils/types'

// Styles
import styles from './App.module.scss'

export interface BurgerStateType {
  bun: dataType
  ingredients: dataType[]
  totalPrice: number
}

const App: React.FC = () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients'

  // Fetching data
  const [data, isLoading, hasError] = useFetchIngredients(url)

  // Adding ingredients and buns
  const [stateBurger, dispatchBurger] = React.useReducer(
    burgerReducer,
    initialBurgerState,
  )

  return (
    <>
      <AppHeader />
      <main className={`container ${styles.main}`}>
        {isLoading ? (
          <Loader />
        ) : hasError ? (
          <h2>Что-то пошло не так</h2>
        ) : (
          <DataContext.Provider value={{ data }}>
            <BurgerContext.Provider value={{ stateBurger, dispatchBurger }}>
              <h2 className={styles.title}>Соберите бургер</h2>
              <BurgerIngredients />
              <BurgerConstructor burgerState={stateBurger} />
            </BurgerContext.Provider>
          </DataContext.Provider>
        )}
      </main>
    </>
  )
}

export default App
