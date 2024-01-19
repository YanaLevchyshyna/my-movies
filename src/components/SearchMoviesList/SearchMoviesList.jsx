import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export default function SearchMoviesList({ movies }) {
  const location = useLocation();
  const { t } = useTranslation();

  const baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  const baseUrlBiggerImg = 'https://image.tmdb.org/t/p/w440_and_h660_face';

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <div>
              <img
                src={`${baseUrl}${movie.poster_path}`}
                srcSet={`${baseUrl}${movie.poster_path} 1x, ${baseUrlBiggerImg}${movie.poster_path} 2x`}
                alt={t(movie.original_title)}
              />
            </div>
            {movie.title}
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
