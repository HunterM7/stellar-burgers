import React from 'react'

// Components
import { Modal, IngredientInfo } from 'components'

// Styles
import styles from './IngredientDetails.module.scss'

const IngredientDetails: React.FC = () => {
  return (
    <Modal title="Детали ингредиента">
      <div className={styles.container}>
        <IngredientInfo />
      </div>
    </Modal>
  )
}

export default React.memo(IngredientDetails)
