'use client'
import { useState } from 'react'
import Modal from './Modal'
import FormModalComponent from './FormModal'

const JobButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    dateApplied: '',
    status: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted Data:', formData) // Replace with your save logic
    closeModal()
    setFormData({
      company: '',
      position: '',
      dateApplied: '',
      status: '',
    })
  }

  return (
    <div>
      <div>
        <button
          onClick={openModal}
          className=" mt-3 w-full h-9 rounded-md text-xl px-8 text-dark-text font-semibold bg-green-teal text-clicked-black hover:bg-green-teal/90"
        >
          Add Applied Job
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        handleSubmit
        handleInputChange
      >
        <FormModalComponent formData />
      </Modal>
    </div>
  )
}

export default JobButton
