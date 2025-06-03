import PropTypes from 'prop-types';

import SearchMoviesItem from 'components/SearchMoviesItem/SearchMoviesItem';

import { SearchedMovieList } from './SearchMoviesList.styled';

export default function SearchMoviesList({ movies }) {
  return (
    <SearchedMovieList>
      {movies.map(movie => (
        <SearchMoviesItem key={movie.id} movie={movie} />
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
