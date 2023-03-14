import React from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { useSelector } from 'redux/store'
import { dataIngreientsSelector } from 'redux/selectors'
import { IWSOrder, TIngredient } from 'redux/actionTypes'

// Utils
import { API_URL_ORDERS, OrderStatus } from 'utils/data/constants'
import { dateConverter } from 'utils/dateConverter'
import { getIngredientsList } from 'utils/getIngredientsList'
import { customFetch } from 'utils/api/customFetch'

// Components
import { PriceCard, OrderRow, Loader } from 'components'

// Styles
import styles from './OrderDetails.module.scss'

interface IOrderFetch {
  success: boolean
  orders: IWSOrder[]
}

interface IOrderState {
  isLoading: boolean
  hasError: boolean
  order: IWSOrder | null
}

const OrderDetails: React.FC = () => {
  // Getting order
  const { id = '' } = useParams()

  const initialState: IOrderState = {
    isLoading: true,
    hasError: false,
    order: null,
  }

  const [{ isLoading, hasError, order }, setOrder] =
    React.useState<IOrderState>(initialState)

  React.useEffect(() => {
    customFetch<IOrderFetch>(`${API_URL_ORDERS}/${id}`).then(res => {
      if (res.success) {
        setOrder(prev => ({
          ...prev,
          isLoading: false,
          order: res.orders[0],
        }))
      } else {
        setOrder({ isLoading: false, hasError: true, order: null })
      }
    })
  }, [id])

  // Order creation date
  const date = order ? dateConverter(order.createdAt) : ''

  // Ingredients List
  const allIngredients = useSelector(dataIngreientsSelector)

  const currentIngredients: TIngredient[] | null = order
    ? getIngredientsList(order.ingredients, allIngredients)
    : null

  const ingredientsList = [...new Set(currentIngredients)].map(ingredient => {
    const count =
      ingredient.type === 'bun'
        ? 2
        : currentIngredients?.filter(el => el._id === ingredient._id).length

    return (
      <OrderRow
        count={count || 0}
        ingredient={ingredient}
        key={ingredient._id}
      />
    )
  })

  return (
    <>
      {isLoading && <Loader size="small" />}

      {hasError && <h1>Что-то пошло не так...</h1>}

      {order && (
        <div className={styles.wrapper}>
          <h3 className={styles.name}>{order.name}</h3>

          <p className={styles.status}>{OrderStatus[order.status]}</p>

          <h3 className={styles.composition}>Состав:</h3>

          <ul className={styles.ingredients}>{ingredientsList}</ul>

          <div className={styles.footer}>
            <span className={styles.timing}>{date}</span>

            <PriceCard size="small" ingredients={currentIngredients || []} />
          </div>
        </div>
      )}
    </>
  )
}

export default React.memo(OrderDetails)
