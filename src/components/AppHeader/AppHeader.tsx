// Files
import styles from './AppHeader.module.scss'

// Yandex Components
import {
	Logo,
	ListIcon,
	BurgerIcon,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Components
import AppHeaderLink from './AppHeaderLink/AppHeaderLink'

const AppHeader = () => {
	const linksList = [
		{
			title: 'Конструктор',
			link: '#',
			isActive: true,
			children: <BurgerIcon type='primary' />,
		},
		{
			title: 'Лента заказов',
			link: '#',
			isActive: false,
			children: <ListIcon type='secondary' />,
		},
		{
			title: 'Личный кабинет',
			link: '#',
			isActive: false,
			children: <ProfileIcon type='secondary' />,
		},
	]

	const headerLinks = linksList.map((link, i) => {
		return (
			<AppHeaderLink
				key={i}
				title={link.title}
				link={link.link}
				isActive={link.isActive}
			>
				{link.children}
			</AppHeaderLink>
		)
	})

	return (
		<header className={styles.header}>
			<div
				className={`
					container
					${styles.header__container}
			`}
			>
				<nav className={styles.nav}>{headerLinks}</nav>

				<div className={styles.logo}>
					<Logo />
				</div>
			</div>
		</header>
	)
}

export default AppHeader
