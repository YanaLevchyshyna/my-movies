import { useState, useEffect } from 'react';
import getApi from 'services/fetchApi';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';

const moviesApi = getApi();

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const { results } = await moviesApi.fetchTrendingMovies();

        if (results.length === 0) {
          throw new Error(`Sorry, something went wrong... Please try again.`);
        }
        setMovies(results);
        console.log('-----> data.results', results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.log('error.message-error.message', error.message);
    return <p>{error.message}</p>;
  }

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMoviesList movies={movies} />
    </main>
  );
}
export default Home;
