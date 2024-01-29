import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ReadMoreReact from 'read-more-react';

import {
  Wrapper,
  SearchedMovieList,
  SearchedMovieItem,
  MovieDescriptionWrapper,
  MovieTitle,
  SearchedMovieImg,
  MovieOverview,
} from './SearchMoviesList.styled';
import defaultPosterImg from '../../images/default-movie-img.png';

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
              <MovieOverview>{}</MovieOverview>
              <ReadMoreReact
                text={movie.overview}
                min={80}
                ideal={100}
                max={200}
                readMoreText="click here to read more"
              />
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
