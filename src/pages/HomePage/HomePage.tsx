import React from 'react'

// DnD
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useDispatch, useSelector } from '../../redux/store'
import { dataSelector } from '../../redux/selectors/dataSelector'
import { getIngredients } from '../../redux/actions/dataActions'
import Loader from '../../components/Loader/Loader'
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor'

// Styles
import styles from './HomePage.module.scss'

const HomePage = () => {
  const { isLoading, hasError } = useSelector(dataSelector)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <main className={`container ${styles.wrapper}`}>
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
  )
}

export default HomePage
