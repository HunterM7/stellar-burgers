import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

import { PROFILE_LINK, HOME_LINK, ORDER_FEED_LINK } from './constants'

interface TLinkList {
  title: string
  path: string
  icon: React.ReactElement
}

export const linksList: TLinkList[] = [
  {
    title: 'Конструктор',
    path: HOME_LINK,
    icon: <BurgerIcon type="primary" />,
  },
  {
    title: 'Лента заказов',
    path: ORDER_FEED_LINK,
    icon: <ListIcon type="primary" />,
  },
  {
    title: 'Личный кабинет',
    path: PROFILE_LINK,
    icon: <ProfileIcon type="primary" />,
  },
]
