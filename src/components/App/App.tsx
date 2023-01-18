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

// Files and other
import { API_URL_INGREDIENTS } from '../../utils/constants'

// Types
import { dataType } from '../../utils/types'

// Styles
import styles from './App.module.scss'
import { useSelector } from 'react-redux'
import { getData } from '../../redux/actions/dataAction'
import { useDispatch } from 'react-redux'

export interface BurgerStateType {
  bun: dataType
  ingredients: dataType[]
  totalPrice: number
}

const App: React.FC = () => {
  // Fetching data
  // const [data, isLoading, hasError] = useFetchIngredients(API_URL_INGREDIENTS)

  const { data, isLoading, hasError } = useSelector((store) => store.data)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getData())
  }, [])

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
            <h2 className={styles.title}>Соберите бургер</h2>
            <BurgerIngredients />
            <BurgerConstructor />
          </DataContext.Provider>
        )}
      </main>
    </>
  )
}

export default App
