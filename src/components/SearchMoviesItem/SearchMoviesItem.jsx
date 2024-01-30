import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import {
  Wrapper,
  SearchedMovieItem,
  MovieDescriptionWrapper,
  MovieTitle,
  SearchedMovieImg,
  MovieOverview,
  ReadMoreButton,
} from './SearchMoviesItem.styled';
import defaultPosterImg from '../../images/default-movie-img.png';

export default function SearchMoviesItem({ movie }) {
  const [showFullMovieOverview, setShowFullMovieOverview] = useState(false);

  const location = useLocation();
  const { t } = useTranslation();

  const baseUrl = 'https://media.themoviedb.org/t/p/w94_and_h141_bestv2';
  const baseUrlBiggerImg =
    'https://media.themoviedb.org/t/p/w188_and_h282_bestv2';

  return (
    <SearchedMovieItem>
      <Wrapper>
        <SearchedMovieImg
          src={
            movie.poster_path
              ? `${baseUrl}${movie.poster_path}`
              : defaultPosterImg
          }
          srcSet={
            movie.poster_path
              ? `${baseUrl}${movie.poster_path} 1x, ${baseUrlBiggerImg}${movie.poster_path} 2x`
              : defaultPosterImg
          }
          alt={t(movie.title)}
        />
        <MovieDescriptionWrapper>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieTitle> {movie.title}</MovieTitle>
          </Link>
          {showFullMovieOverview ? (
            <div>
              <MovieOverview>{movie.overview}</MovieOverview>
              <ReadMoreButton onClick={() => setShowFullMovieOverview(false)}>
                Show less
              </ReadMoreButton>
            </div>
          ) : (
            <div>
              <MovieOverview>{movie.overview.slice(0, 150)}</MovieOverview>
              <ReadMoreButton onClick={() => setShowFullMovieOverview(true)}>
                Read more
              </ReadMoreButton>
            </div>
          )}
        </MovieDescriptionWrapper>
      </Wrapper>
    </SearchedMovieItem>
  );
}

SearchMoviesItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
