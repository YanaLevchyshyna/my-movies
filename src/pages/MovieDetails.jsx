import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const movieIdApi = getApi();

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  // console.log('movieId-----', id);
  // console.log('useParams()=====>>', useParams());

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const baseUrl = 'https://image.tmdb.org/t/p/w200/';

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchDataMovieDetails = async () => {
      try {
        await movieIdApi.fetchMovieId(id).then(response => {
          // console.log('response ==>', response);

          if (response.success === false) {
            setError(
              new Error('The resource you requested could not be found.')
            );
          }
          setMovie(response);
        });
      } catch (error) {
        setError(new Error('The resource you requested could not be found.'));
      } finally {
        setLoading(false);
      }
    };
    fetchDataMovieDetails();
  }, [id]);

  if (!id) {
    return <Error />;
  }

  return (
    <>
      {loading && <Loader />}

      {error && <Error />}

      <Link to={backLinkLocationRef.current}>Back to movies</Link>

      {movie && (
        <div>
          <div>
            <img
              src={`${baseUrl}${movie.backdrop_path}`}
              alt={movie.original_title}
            />
          </div>
          <img
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.original_title}
          />
          <p>{movie.original_title}</p>
          <p>{movie.overview}</p>
        </div>
      )}
      <section>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>Actors</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
}

export default MovieDetails;
