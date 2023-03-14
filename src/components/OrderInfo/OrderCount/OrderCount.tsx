import React from 'react'

// Styles
import styles from './OrderCount.module.scss'

interface IOrderCount {
  title: string
  count: number
}

const OrderCount: React.FC<IOrderCount> = ({ title, count }) => {
  const modifiedCount = count
    .toString()
    .split(/(?=(?:...)*$)/)
    .join(' ')

  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.count}>{modifiedCount}</p>
    </>
  )
}

export default React.memo(OrderCount)
