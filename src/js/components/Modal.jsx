import React from 'react'

const Modal = ({ showModal, children }) => {
  if (!showModal) return null

  return (
    <div className="modal-container">
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
}

export default Modal