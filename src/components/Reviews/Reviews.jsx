import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import {
  ReviewerImg,
  ReviewsList,
  ReviewItem,
  ReviewImgAuthorWrapper,
  ReviewAuthor,
  ReviewContent,
  NoReviews,
} from './Reviews.styled';

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
        setReviews(results);

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
            <ReviewsList>
              {reviews.map(review => (
                <ReviewItem key={review.id}>
                  <ReviewImgAuthorWrapper>
                    <ReviewerImg />
                    <ReviewAuthor>{review.author}</ReviewAuthor>
                  </ReviewImgAuthorWrapper>
                  <ReviewContent>{review.content}</ReviewContent>
                </ReviewItem>
              ))}
            </ReviewsList>
          </div>
        </section>
      ) : (
        <NoReviews>{t('movieDetails.noReviews')}</NoReviews>
      )}
    </>
  );
}
