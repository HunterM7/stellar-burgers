import React from 'react'

// Components
import { Modal, IngredientInfo } from 'components'

interface IngredientDetailsT {
  closeModal: () => void
}

const IngredientDetails: React.FC<IngredientDetailsT> = ({ closeModal }) => {
  return (
    <Modal title="Детали ингредиента" closeFunc={closeModal}>
      <IngredientInfo />
    </Modal>
  )
}

export default React.memo(IngredientDetails)
