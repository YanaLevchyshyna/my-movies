import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getApi from 'services/fetchApi';
import PopularMovies from 'components/TrendingMoviesList/TrendingMoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { Title } from './Home.styled';
import Footer from 'components/Footer/Footer';

const moviesApi = getApi();

function Home() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  console.log('currentPage', currentPage);
  console.log('totalPages', totalPages);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const { results, total_pages } = await moviesApi.fetchPopularMovies(
          language,
          currentPage
        );
        // console.log('results', results);
        // console.log('total__Pages', total_pages);

        if (results.length === 0) {
          toast.error(t('Sorry, something went wrong... Please try again!'), {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
        setMovies(prevResults =>
          currentPage === 1 ? results : [...prevResults, ...results]
        );
        setTotalPages(total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [language, t, currentPage]);

  const onLoadMoreButtonClick = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <main>
        {loading && <Loader />}

        {error && <Error />}

        <Title>{t('trendingToday')}</Title>
        <PopularMovies movies={movies} onClick={onLoadMoreButtonClick} />
      </main>
      <Footer />
    </>
  );
}
export default Home;
