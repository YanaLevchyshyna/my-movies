import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import Footer from 'components/Footer/Footer';
import { Title, MoviesContainer, Section } from './Movies.styled';

const searchApi = getApi();

export default function Movies() {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language;

  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setLoading(true);

    const fetchDataSearchMovie = async () => {
      try {
        const { results } = await searchApi.fetchSearchMovie(
          searchQuery,
          currentLng
        );
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

    setLoading(false);
  }, [currentLng, searchQuery]);

  // console.log('movies', movies);

  return (
    <>
      <main>
        <MoviesContainer>
          {loading && <Loader />}
          <Title>{t('searchMovie')}</Title>
          <SearchBar onSubmit={handleSubmit} />
          {movies && (
            <Section>
              <SearchMoviesList movies={movies} />
            </Section>
          )}
        </MoviesContainer>
      </main>
      <Footer />
    </>
  );
}
