import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Section,
  Container,
  MoviesList,
  MovieItem,
  PosterWrapp,
  MovieTitle,
} from './TrendingMoviesList.styled';

export default function TrendingMoviesList({ movies }) {
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
                    alt={movie.original_title}
                  />
                </PosterWrapp>
              </Link>
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieItem>
          ))}
        </MoviesList>
      </Container>
    </Section>
  );
}

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      vote_average: PropTypes.number,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ),
};
