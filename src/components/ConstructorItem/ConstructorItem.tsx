import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Identifier, XYCoord } from 'dnd-core'

// Yandex components
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch, useSelector } from '../../redux/store'
import { TIngredientCart } from '../../redux/actionTypes/types'
import {
  removeIngredient,
  reorderIngredients,
} from '../../redux/actionCreators/cartActionCreators'
import { cartIngredientsSelector } from '../../redux/selectors/cartSelectors'

// Functions
import { sortFunc } from '../../utils/sortFunc'

// Styles
import styles from './ConstructorItem.module.scss'

type TConstructorItem = {
  ingredient: TIngredientCart
  orderId: number
}

const ConstructorItem: React.FC<TConstructorItem> = ({
  ingredient,
  orderId,
}) => {
  const dispatch = useDispatch()

  const ingredients = useSelector(cartIngredientsSelector)

  // DnD
  const itemRef = React.useRef<HTMLLIElement>(null)

  const [{ isDragging }, dragSortRef] = useDrag({
    type: 'SORT_INGREDIENT',
    item: {
      ingredient,
      orderId,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [{ handlerId }, dropSortRef] = useDrop<
    TConstructorItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'SORT_INGREDIENT',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      const dragIndex = item.orderId
      const hoverIndex = orderId

      if (!itemRef.current || dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = itemRef.current.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      dispatch(
        reorderIngredients(
          sortFunc<TIngredientCart>(ingredients, dragIndex, hoverIndex),
        ),
      )

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.orderId = hoverIndex
    },
  })

  dragSortRef(dropSortRef(itemRef))

  return (
    <li
      ref={itemRef}
      data-handler-id={handlerId}
      className={`
				${styles.wrapper}
				${isDragging ? styles['wrapper--draggable'] : ''}
			`}>
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>

      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => dispatch(removeIngredient(ingredient.uuid))}
      />
    </li>
  )
}

export default ConstructorItem
