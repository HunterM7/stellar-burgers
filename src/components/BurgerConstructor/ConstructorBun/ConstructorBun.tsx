import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useSelector } from 'redux/store'
import { cartBunSelector } from 'redux/selectors'

// Components
import { ConstructorPlug } from 'components'

// Styles
import styles from './ConstructorBun.module.scss'

interface IConstructorBun {
  position: 'top' | 'bottom'
}

const ConstructorBun: React.FC<IConstructorBun> = ({ position }) => {
  const bun = useSelector(cartBunSelector)

  return (
    <div className={styles.bun}>
      {bun ? (
        <ConstructorElement
          type={position}
          isLocked={true}
          text={`${bun.name} ${position === 'top' ? '(верх)' : '(низ)'}`}
          price={bun.price}
          thumbnail={bun.image}
        />
      ) : (
        <ConstructorPlug position={position} title="Выберите булку" />
      )}
    </div>
  )
}

export default React.memo(ConstructorBun)
