import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export default function SearchMoviesList({ movies }) {
  const location = useLocation();
  const { t } = useTranslation();

  const baseUrl = 'https://media.themoviedb.org/t/p/w94_and_h141_bestv2';
  const baseUrlBiggerImg =
    'https://media.themoviedb.org/t/p/w188_and_h282_bestv2';

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <div>
              <img
                src={`${baseUrl}${movie.poster_path}`}
                srcSet={`${baseUrl}${movie.poster_path} 1x, ${baseUrlBiggerImg}${movie.poster_path} 2x`}
                alt={t(movie.title)}
              />
              {movie.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

SearchMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
