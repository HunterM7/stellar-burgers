import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Identifier, XYCoord } from 'dnd-core'

// Yandex components
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { TIngredientCart } from '../../redux/actionTypes/types'
import { useDispatch, useSelector } from '../../redux/store'
import {
  removeIngredient,
  reorderIngredients,
} from '../../redux/actionCreators/cartActionCreators'

// Functions
import { dndSortFunc } from '../../utils/dndSortFunc'

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

  const { ingredients } = useSelector((store) => store.cart)

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
      if (!itemRef.current) {
        return
      }
      const dragIndex = item.orderId
      const hoverIndex = orderId

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = itemRef.current?.getBoundingClientRect()

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
        reorderIngredients(dndSortFunc(ingredients, dragIndex, hoverIndex)),
      )

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.orderId = hoverIndex
    },
  })

  const opacity = isDragging ? 0 : 1
  dragSortRef(dropSortRef(itemRef))

  return (
    <li
      ref={itemRef}
      style={{ opacity }}
      data-handler-id={handlerId}
      className={styles.wrapper}>
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
