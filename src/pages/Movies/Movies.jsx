import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import Footer from 'components/Footer/Footer';
import { Title } from './Movies.styled';

const searchApi = getApi();

export default function Movies() {
  const { t } = useTranslation();

  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  // const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  // const query = searchParams.get('query');
  // const debounceQuery = useDebounce(query, 250); //затримуємо виконання функції,
  // тобто поки користувач не припинить вводоити текст протягом певного періоду

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setLoading(true);

    const fetchDataSearchMovie = async () => {
      try {
        const { results } = await searchApi.fetchSearchMovie(searchQuery);
        if (!results) {
          toast.error('The movie could not be found.', {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
        setMovies(results);
        console.log('setMovieName SEARCH ==>', results);
      } catch (error) {
        console.error(error);
        toast.error('404 Error !!!', {
          position: toast.POSITION.TOP_CENTER,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDataSearchMovie();

    // setMovies([]);
    setLoading(false);
  }, [searchQuery]);

  console.log('movies', movies);

  return (
    <>
      <main>
        {loading && <Loader />}
        <Title>{t('searchMovie')}</Title>
        <SearchBar onSubmit={handleSubmit} />
        {movies && (
          <section>
            <SearchMoviesList movies={movies} />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
