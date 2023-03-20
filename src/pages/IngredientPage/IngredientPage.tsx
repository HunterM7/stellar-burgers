import React from 'react'
import classNames from 'classnames'

// Components
import { IngredientInfo } from 'components'

// Styles
import styles from './IngredientPage.module.scss'

const IngredientPage: React.FC = () => {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <h2>Детали ингредиента</h2>
      <IngredientInfo />
    </div>
  )
}

export default React.memo(IngredientPage)
