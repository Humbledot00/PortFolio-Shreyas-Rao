'use client'
import { useState } from 'react'
import { Button, Modal } from 'keep-react'

export const ModalComponent = ({ resumeImage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={openModal}>Resume</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
          <Modal.Icon className="h-20 w-20 border border-success-100 bg-success-50 text-success-500">
            <img src={resumeImage} alt="Resume" className="w-full h-auto" />
          </Modal.Icon>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" color="success">
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}
