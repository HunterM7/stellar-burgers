import React from 'react'

// DnD
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Components
import Loader from '../Loader/Loader'
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

// Redux
import { getIngredients } from '../../redux/actions/dataActions'
import { useDispatch, useSelector } from '../../redux/store'

// Styles
import styles from './App.module.scss'

const App: React.FC = () => {
  const { isLoading, hasError } = useSelector((store) => store.data)

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
          <DndProvider backend={HTML5Backend}>
            <h2 className={styles.title}>Соберите бургер</h2>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        )}
      </main>
    </>
  )
}

export default App
