import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import {
  ModalBackdrop,
  ModalContent,
  CloseButton,
  IframeEl,
} from './Modal.styled';
import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

const movieIdApi = getApi();

export default function Modal({ onClose }) {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  console.log('videos', videos);

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
    setLoading(true);

    const fetchDataMovieVideo = async () => {
      try {
        const { results } = await movieIdApi.fetchMovieVideos(id);
  

        if (results.length === 0) {
          toast.error(t('checkTrailers'), {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
        const trailerVideo = results.filter(video => video.type === 'Trailer');
  
        setVideos(trailerVideo);
      } catch (error) {
        console.error('ERROR', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataMovieVideo();
  }, [id, t]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        {loading ? (
          <Loader />
        ) : (
          <>
            {videos && videos.length && (
              <div>
                <IframeEl
                  src={`https://www.youtube.com/embed/${
                    videos && videos.length > 0 ? videos[0].key : ''
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></IframeEl>
              </div>
            )}
          </>
        )}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
