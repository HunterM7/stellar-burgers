import React from 'react'

// Files
import styles from './AppHeader.module.scss'

// Yandex Components
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

// Components
import AppHeaderLink from './AppHeaderLink/AppHeaderLink'

const AppHeader: React.FC = () => {
	const linksList = [
		{
			title: 'Конструктор',
			link: '#',
		},
		{
			title: 'Лента заказов',
			link: '#',
		},
		{
			title: 'Личный кабинет',
			link: '#',
		},
	]

	const [activeLink, setActiveLink] =
		React.useState('Конструктор')

	const headerLinks = linksList.map((link, i) => {
		return (
			<AppHeaderLink
				key={i}
				title={link.title}
				link={link.link}
				isActive={activeLink === link.title}
				setActiveLink={setActiveLink}
			/>
		)
	})

	return (
		<header className={styles.header}>
			<div className='container'>
				<nav className={styles.nav}>{headerLinks}</nav>

				<div className={styles.logo}>
					<Logo />
				</div>
			</div>
		</header>
	)
}

export default AppHeader
