import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getApi from 'services/fetchApi';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { Title } from './Home.styled';
import Footer from 'components/Footer/Footer';

const moviesApi = getApi();

function Home() {
  const { t } = useTranslation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const { results } = await moviesApi.fetchTrendingMovies();

        if (results.length === 0) {
          toast.error(t('Sorry, something went wrong... Please try again!'), {
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
  }, [t]);

  return (
    <>
      <main>
        {loading && <Loader />}

        {error && <Error />}

        <Title>{t('trendingToday')}</Title>
        <TrendingMoviesList movies={movies} />
      </main>
      <Footer />
    </>
  );
}
export default Home;
