import React from 'react'

// Components
import { Modal, IngredientInfo } from 'components'

const IngredientDetails: React.FC = () => {
  return (
    <Modal title="Детали ингредиента">
      <IngredientInfo />
    </Modal>
  )
}

export default React.memo(IngredientDetails)
