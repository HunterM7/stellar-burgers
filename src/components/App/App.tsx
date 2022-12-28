// Files
import styles from './App.module.scss'

// Components
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

function App() {
	return (
		<div className={styles.App}>
			<AppHeader />
			<BurgerIngredients />
			<BurgerConstructor />
		</div>
	)
}

export default App
