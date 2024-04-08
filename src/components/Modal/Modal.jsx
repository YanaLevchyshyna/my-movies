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
  // console.log('videos[0]', videos[0].key);

  const { id } = useParams();
  // console.log('id', id);

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
        console.log('VIDEOS ==> 222', results);

        if (results.length === 0) {
          toast.error(t('checkTrailers'), {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
        const trailerVideo = results.filter(video => video.type === 'Trailer');
        console.log('trailerVideo 333', trailerVideo);
        setVideos(trailerVideo);
      } catch (error) {
        console.error('ERROR', error);
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

        {videos && videos.length > 0 ? (
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${
                videos && videos.length > 0 ? videos[0].key : ''
              }`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p>noTrailer</p>
        )}
      </ModalContetnt>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
