import React, { PropsWithChildren } from 'react'

// Files
import styles from './AppHeaderLink.module.scss'

type AppHeaderLinkType = {
	link: string
	title: string
	isActive: boolean
	children: any
}

const AppHeaderLink: React.FC<
	PropsWithChildren<AppHeaderLinkType>
> = ({ link, title, isActive, children }) => {
	return (
		<a className={styles.wrapper} href={link}>
			{children}
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
