import { useState, useEffect } from 'react';
import fetchApi from 'services/fetchApi';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  // const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi.fetchMovies();
        setMovies(data.results);
        // setTotalPages(data.total_pages);
        console.log(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    console.log(error.message);
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
