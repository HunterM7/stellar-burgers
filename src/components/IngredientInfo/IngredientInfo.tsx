import React from 'react'
import { useParams } from 'react-router-dom'

// Hooks
import useIngredientDetails from 'hooks/useIngredientDetails'

// Components
import { Loader } from 'ui'
import { IngredientInfoCard } from 'components'

const IngredientInfo: React.FC = () => {
  const { id } = useParams()
  const ingredient = useIngredientDetails(id)

  return (
    <>
      {!ingredient ? (
        <Loader size="small" />
      ) : (
        <IngredientInfoCard ingredient={ingredient} />
      )}
    </>
  )
}

export default React.memo(IngredientInfo)
