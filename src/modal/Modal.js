import { Container } from '@mui/material';
import React from 'react';
import { StyledButton, StyledContainer, StyledModal } from '../styled-components/styled-components';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <StyledModal className="modal-overlay">
          <StyledContainer className='modal'>
            <StyledButton className="modal-close" onClick={onClose} border="none">
              X
            </StyledButton>
            <StyledContainer className="modal-content">{children}</StyledContainer>
          </StyledContainer>
        </StyledModal>
      ) : null}
    </>
  );
};

export default Modal;
