import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContetnt, CloseButton } from './Modal.styled';
import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const modalRoot = document.querySelector('#modal-root');

const movieIdApi = getApi();

export default function Modal({ onClose }) {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  console.log('videos', videos);

  const { id } = useParams();
  console.log('id', id);

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
    setLoading(true);

    const fetchDataMovieVideo = async () => {
      try {
        const { results } = await movieIdApi.fetchMovieVideos(id);
        console.log('VIDEOS', results);

        if (results.length === 0) {
          toast.error(t('checkTrailers'), {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }

        setVideos(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataMovieVideo();
  }, [id]);

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
            src={`https://www.youtube.com/embed/s_76M4c4LTo`}
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
