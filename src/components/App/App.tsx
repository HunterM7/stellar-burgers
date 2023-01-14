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
  BurgerActions,
  BurgerContext,
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

  function burgerReducer(
    state: BurgerStateType,
    action: { type: BurgerActions; payload: dataType },
  ) {
    switch (action.type) {
      case 'setBun':
        return {
          ...state,
          bun: action.payload,
        }
      case 'setIngredient':
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        }
      case 'removeIngredient':
        return {
          ...state,
          ingredients: [...state.ingredients].filter(
            (el) => el._id !== action.payload._id,
          ),
        }
      case 'setTotalPrice':
        return {
          ...state,
          totalPrice:
            state.bun.price * 2 +
            state.ingredients.reduce((sum, data) => sum + data.price, 0),
        }

      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(burgerReducer, initialBurgerState)

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
            <BurgerContext.Provider value={{ state, dispatch }}>
              <h2 className={styles.title}>Соберите бургер</h2>
              <BurgerIngredients />
              <BurgerConstructor burgerState={state} />
            </BurgerContext.Provider>
          </DataContext.Provider>
        )}
      </main>
    </>
  )
}

export default App
