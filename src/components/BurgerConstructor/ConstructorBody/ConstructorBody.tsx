import React from 'react'
import { useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch } from 'redux/store'
import { cartSelector, dataIngreientsSelector } from 'redux/selectors'
import { setBun, setIngredient } from 'redux/actionCreators'

// Components
import { ConstructorItem, ConstructorPlug } from 'components'

// Styles
import styles from './ConstructorBody.module.scss'

const ConstructorBody: React.FC = () => {
  const dispatch = useDispatch()

  const allIngredients = useSelector(dataIngreientsSelector)
  const { bun, ingredients } = useSelector(cartSelector)

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
      <div className={styles.bun}>
        {bun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        ) : (
          <ConstructorPlug position="top" title="Выберите булку" />
        )}
      </div>

      <div className={styles.ingredients}>
        {burgerIngredients.length ? (
          <ul className={styles.ingredients__list}>{burgerIngredients}</ul>
        ) : (
          <div className={styles.ingredients__plug}>
            <ConstructorPlug title="Добавьте ингридиенты" />
          </div>
        )}
      </div>

      <div className={styles.bun}>
        {bun ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        ) : (
          <ConstructorPlug position="bottom" title="Выберите булку" />
        )}
      </div>
    </div>
  )
}

export default React.memo(ConstructorBody)
