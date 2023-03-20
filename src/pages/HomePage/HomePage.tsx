import React from 'react'
import classNames from 'classnames'

// DnD
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Redux
import { useSelector } from 'redux/store'
import { dataSelector } from 'redux/selectors'

// Components
import { Loader, BurgerIngredients, BurgerConstructor } from 'components'

// Styles
import styles from './HomePage.module.scss'

const HomePage: React.FC = () => {
  const { isLoading, hasError } = useSelector(dataSelector)

  return (
    <main className={classNames('container', styles.wrapper)}>
      {isLoading && <Loader />}

      {hasError && <h2>Что-то пошло не так</h2>}

      {!isLoading && !hasError && (
        <DndProvider backend={HTML5Backend}>
          <h2 className={styles.title}>Соберите бургер</h2>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </main>
  )
}

export default React.memo(HomePage)
