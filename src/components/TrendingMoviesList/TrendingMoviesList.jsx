import { Link } from 'react-router-dom';

export default function TrendingMoviesList({ movies }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w300/';
  return (
    <section>
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <div>
                <Link to={`${movie.id}`}>
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
