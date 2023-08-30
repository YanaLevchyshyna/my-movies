import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';

const movieIdApi = getApi();

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log('movieId-----', id);
  console.log('useParams()=====>>', useParams());

  const location = useLocation;
  const backLinkHref = location.state?.from ?? '/';

  const baseUrl = 'https://image.tmdb.org/t/p/w200/';

  useEffect(() => {
    setLoading(true);

    movieIdApi
      .fetchMovieId(id)
      .then(response => {
        console.log('response ==>', response);
        setMovie(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Link to={backLinkHref}>Back to products</Link>
      {movie ? (
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
      ) : (
        <Loader />
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
    </div>
  );
}

export default MovieDetails;
