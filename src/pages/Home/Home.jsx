import { useState, useEffect } from 'react';
import getApi from 'services/fetchApi';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { toast } from 'react-toastify';
import { Title } from './Home.styled';
import Footer from 'components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
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
          toast.error('Sorry, something went wrong... Please try again!', {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        {loading && <Loader />}

        {error && <Error />}

        <Title>Trending today</Title>
        <TrendingMoviesList movies={movies} />
      </main>
      <Footer />
    </>
  );
}
export default Home;
