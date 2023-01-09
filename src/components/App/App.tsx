import React from 'react'

// Components
import Loader from '../Loader/Loader'
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

// Hooks
import useFetchIngredients from '../../hooks/useFetchIngredients'

// Styles
import styles from './App.module.scss'

const App: React.FC = () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients'

  const [data, isLoading, hasError] = useFetchIngredients(url)

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
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
          </>
        )}
      </main>
    </>
  )
}

export default App
