import React from 'react'
import { useParams } from 'react-router-dom'

// Components
import { IngredientInfoCard, Loader } from 'components'
import useIngredientDetails from 'hooks/useIngredientDetails'

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
