import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContetnt, CloseButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContetnt>
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/Y0ZsLudtfjI`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </ModalContetnt>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
