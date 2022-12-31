import React, { SetStateAction } from 'react'

// Files
import styles from './AppHeaderLink.module.scss'

// Yandex Components
import {
	BurgerIcon,
	ListIcon,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

type AppHeaderLinkType = {
	link: string
	title: string
	isActive: boolean
	setActiveLink: React.Dispatch<SetStateAction<string>>
}

const AppHeaderLink: React.FC<AppHeaderLinkType> = ({
	link,
	title,
	isActive,
	setActiveLink,
}) => {
	// Handle click on link
	const handleClick = () => {
		setActiveLink(title)
	}

	return (
		<a
			className={styles.wrapper}
			href={link}
			onClick={handleClick}
		>
			{title === 'Конструктор' && (
				<BurgerIcon
					type={isActive ? 'primary' : 'secondary'}
				/>
			)}
			{title === 'Лента заказов' && (
				<ListIcon
					type={isActive ? 'primary' : 'secondary'}
				/>
			)}
			{title === 'Личный кабинет' && (
				<ProfileIcon
					type={isActive ? 'primary' : 'secondary'}
				/>
			)}

			<span
				className={`
				${styles.text}
				${isActive ? styles.active : ''}
			`}
			>
				{title}
			</span>
		</a>
	)
}

export default AppHeaderLink
