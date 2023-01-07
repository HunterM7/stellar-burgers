import React from 'react'

const useModal = (initialState: boolean) => {
  const [isModalActive, setIsModalActive] =
    React.useState<boolean>(initialState)

  const toggleModal = () => {
    setIsModalActive((prev) => !prev)
  }

  return { isModalActive, toggleModal }
}

export default useModal
