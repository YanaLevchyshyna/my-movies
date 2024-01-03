import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import { ReviewerImg } from './Reviews.styled';

const movieIdApi = getApi();

export default function Reviews() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchDataMovieReviews = async () => {
      try {
        const { results } = await movieIdApi.fetchMovieReviews(
          id,
          currentLanguage
        );

        // if (results.length === 0) {
        //   toast.info(t('movieDetails.noReviews'), {
        //     position: toast.POSITION.TOP_CENTER,
        //   });
        //   return;
        // }
        setReviews(results);
        // console.log('Reviews', results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataMovieReviews();
  }, [id, currentLanguage]);

  return (
    <>
      {loading && <Loader />}

      {reviews && reviews.length > 0 ? (
        <section>
          <div>
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <ReviewerImg />
                  <p>{review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <p>{t('movieDetails.noReviews')}</p>
      )}
    </>
  );
}
