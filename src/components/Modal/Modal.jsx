import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContetnt, CloseButton } from './Modal.styled';
import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose }) {
  const [videos, setVideos] = useState;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { id } = useParams();

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

  useEffect(() => {
    const fetchDataMovieDetails = async () => {
      try {
        await getApi.fetchMovieId(id, currentLanguage).then(response => {
          // console.log('response ==>', response);

          if (response.success === false) {
            setError(
              new Error('The resource you requested could not be found.')
            );
          }
          setVideos(response);
        });
      } catch (error) {
        setError(new Error('The resource you requested could not be found.'));
      } finally {
        setLoading(false);
      }
    };
    fetchDataMovieDetails();
  }, [currentLanguage, id]);

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
