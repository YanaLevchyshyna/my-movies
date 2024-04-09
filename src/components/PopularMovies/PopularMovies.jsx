import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import CircularRating from 'components/CircularProgressbar/CircularProgressbar';

import {
  Section,
  Container,
  MoviesList,
  MovieItem,
  PosterWrapp,
  MovieTitle,
  CircularRatingWrap,
  Button,
} from './PopularMovies.styled';

export default function PopularMovies({ movies, onClick, showLoadMoreButton }) {
  const { t } = useTranslation();
  const location = useLocation();
  const baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  const baseUrlBiggerImg = 'https://image.tmdb.org/t/p/w440_and_h660_face';

  return (
    <Section>
      <Container>
        <MoviesList>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <PosterWrapp>
                  <img
                    src={`${baseUrl}${movie.poster_path}`}
                    srcSet={`${baseUrl}${movie.poster_path} 1x, ${baseUrlBiggerImg}${movie.poster_path} 2x`}
                    alt={t(movie.original_title)}
                  />
                </PosterWrapp>
              </Link>
              <MovieTitle>{t(movie.title)}</MovieTitle>
              <CircularRatingWrap>
                <CircularRating rating={movie.vote_average} />
              </CircularRatingWrap>
            </MovieItem>
          ))}
        </MoviesList>

        <Button type="button" onClick={onClick}>
          {t('loadMore')}
        </Button>
      </Container>
    </Section>
  );
}

PopularMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      vote_average: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
