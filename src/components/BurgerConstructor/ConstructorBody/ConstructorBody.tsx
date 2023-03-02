import React from 'react'
import { useDrop } from 'react-dnd'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { setBun, setIngredient } from 'redux/actionCreators'
import { cartSelector, dataIngreientsSelector } from 'redux/selectors'

// Components
import { ConstructorBun, ConstructorItem, ConstructorPlug } from 'components'

// Styles
import styles from './ConstructorBody.module.scss'

const ConstructorBody: React.FC = () => {
  const dispatch = useDispatch()

  const allIngredients = useSelector(dataIngreientsSelector)
  const { ingredients } = useSelector(cartSelector)

  // Burger content
  const burgerIngredients = React.useMemo(
    () =>
      ingredients.map((item, i) => (
        <ConstructorItem key={item.uuid} ingredient={item} orderId={i} />
      )),
    [ingredients],
  )

  // DnD
  const [{ isHover }, dropRef] = useDrop(() => ({
    accept: 'INGREDIENT',
    drop: ({ id }: { id: string }) => dropIngredient(id),
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
  }))

  const dropIngredient = React.useCallback(
    (id: string) => {
      const ingredient = allIngredients.find(el => el._id === id)

      if (ingredient) {
        ingredient.type === 'bun'
          ? dispatch(setBun(ingredient))
          : dispatch(setIngredient(ingredient))
      }
    },
    [allIngredients, dispatch],
  )

  return (
    <div
      ref={dropRef}
      className={`
				${styles.wrapper}
				${isHover ? styles.wrapper_hover : ''}
			`}
    >
      <ConstructorBun position="top" />

      <div className={styles.ingredients}>
        {burgerIngredients.length ? (
          <ul className={styles.ingredients__list}>{burgerIngredients}</ul>
        ) : (
          <div className={styles.ingredients__plug}>
            <ConstructorPlug title="Добавьте ингридиенты" />
          </div>
        )}
      </div>

      <ConstructorBun position="bottom" />
    </div>
  )
}

export default React.memo(ConstructorBody)
