import { ACCOUNT_LINK, HOME_LINK, ORDER_FEED_LINK } from './constants'

interface LinkListT {
  title: string
  path: string
}

export const linksList: LinkListT[] = [
  {
    title: 'Конструктор',
    path: HOME_LINK,
  },
  {
    title: 'Лента заказов',
    path: ORDER_FEED_LINK,
  },
  {
    title: 'Личный кабинет',
    path: ACCOUNT_LINK,
  },
]
