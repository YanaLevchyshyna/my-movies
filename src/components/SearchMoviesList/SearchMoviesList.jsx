import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import {
  Wrapper,
  SearchedMovieList,
  SearchedMovieItem,
  MovieDescriptionWrapper,
  MovieTitle,
  SearchedMovieImg,
  MovieOverview,
} from './SearchMoviesList.styled';

export default function SearchMoviesList({ movies }) {
  const location = useLocation();
  const { t } = useTranslation();

  const baseUrl = 'https://media.themoviedb.org/t/p/w94_and_h141_bestv2';
  const baseUrlBiggerImg =
    'https://media.themoviedb.org/t/p/w188_and_h282_bestv2';

  return (
    <SearchedMovieList>
      {movies.map(movie => (
        <SearchedMovieItem key={movie.id}>
          <Wrapper>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <SearchedMovieImg
                src={`${baseUrl}${movie.poster_path}`}
                srcSet={`${baseUrl}${movie.poster_path} 1x, ${baseUrlBiggerImg}${movie.poster_path} 2x`}
                alt={t(movie.title)}
              />
            </Link>
            <MovieDescriptionWrapper>
              <MovieTitle> {movie.title}</MovieTitle>
              <MovieOverview>{movie.overview}</MovieOverview>
            </MovieDescriptionWrapper>
          </Wrapper>
        </SearchedMovieItem>
      ))}
    </SearchedMovieList>
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
