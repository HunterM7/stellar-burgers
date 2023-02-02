import React from 'react'

// DnD
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { dataSelector } from 'redux/selectors'
import { getIngredients } from 'redux/actions'

// Components
import { Loader, BurgerIngredients, BurgerConstructor } from 'components'

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
