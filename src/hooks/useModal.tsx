import React from 'react'

const useModal = (initialState: boolean) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(initialState)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return { isModalOpen, openModal, closeModal, toggleModal }
}

export default useModal
