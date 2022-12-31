import React from 'react'

// Files
import styles from './App.module.scss'

// Components
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

const App: React.FC = () => {
	return (
		<>
			<AppHeader />
			<main className={`container ${styles.main}`}>
				<h2 className={styles.title}>Соберите бургер</h2>
				<BurgerIngredients />
				<BurgerConstructor />
			</main>
		</>
	)
}

export default App
