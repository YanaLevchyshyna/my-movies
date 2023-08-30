import { Link, useLocation } from 'react-router-dom';

export default function TrendingMoviesList({ movies }) {
  const location = useLocation();
  const baseUrl = 'https://image.tmdb.org/t/p/w200/';
  return (
    <section>
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <div>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={`${baseUrl}${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </Link>
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
                <p>{movie.vote_average}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
