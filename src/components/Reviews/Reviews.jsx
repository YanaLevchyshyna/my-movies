import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const movieIdApi = getApi();

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchDataMovieReviews = async () => {
      try {
        const { results } = await movieIdApi.fetchMovieReviews(id);

        if (results.length === 0) {
          toast.error('The resource you requested could not be found.', {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
        setReviews(results);
        console.log('Reviews', results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataMovieReviews();
  }, [id]);

  return (
    <>
      {loading && <Loader />}

      {reviews && (
        <section>
          <div>
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <p>{review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
