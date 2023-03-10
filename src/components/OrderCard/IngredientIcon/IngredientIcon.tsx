import React from 'react'

// Styles
import styles from './IngredientIcon.module.scss'

interface IIngredientIcon {
  image: string
  counter: number
}

const IngredientIcon: React.FC<IIngredientIcon> = ({ image, counter = 0 }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={image} className={styles.image} alt="Ingredient" />

        {counter > 0 && (
          <span className={styles.toplayer}>
            {counter > 9 ? '9+' : `+${counter}`}
          </span>
        )}
      </div>
    </div>
  )
}

export default IngredientIcon
