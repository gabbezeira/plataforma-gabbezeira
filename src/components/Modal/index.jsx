import React from 'react'
import { ModalContainer } from './styles'
import { X } from 'lucide-react'

export function Modal({ onClose, children }) {
  return (
    <ModalContainer>
      <div className="modal-content">
        <X className="close-button" onClick={onClose} />
        {children}
      </div>
    </ModalContainer>
  )
}
