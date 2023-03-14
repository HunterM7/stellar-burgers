import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils'

// Utils
import { PROFILE_LINK, HOME_LINK, ORDER_FEED_LINK } from 'utils/data/constants'

interface ILinkList {
  title: string
  path: string
  Icon: React.ElementType<TIconProps>
}

export const linksList: ILinkList[] = [
  {
    title: 'Конструктор',
    path: HOME_LINK,
    Icon: BurgerIcon,
  },
  {
    title: 'Лента заказов',
    path: ORDER_FEED_LINK,
    Icon: ListIcon,
  },
  {
    title: 'Личный кабинет',
    path: PROFILE_LINK,
    Icon: ProfileIcon,
  },
]
