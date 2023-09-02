import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDebounce } from 'react-recipes';
import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SearchBar from 'components/SearchBar/SearchBar';

const searchApi = getApi();

export default function Movies() {
  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  const query = searchParams.get('query');
  const debounceQuery = useDebounce(query, 2500); //затримуємо виконання функції,
  // тобто поки користувач не припинить вводоити текст протягом певного періоду

  useEffect(() => {
    setLoading(true);

    const fetchDataSearchMovie = async () => {
      try {
        await searchApi.fetchSearchMovie(debounceQuery).then(response => {
          setMovie(response);
          console.log('setMovieName SEARCH ==>', response);
        });
      } catch (error) {
        throw new Error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDataSearchMovie();
  }, [debounceQuery]);

  console.log('movie', movie);

  //   Викликається під час відправлення форми
  const handleSubmit = e => {
    e.preventDefault();
    const queryValue = e.target.query.value;

    if (queryValue.trim() === '') {
      toast.info('Please enter the name of the movie', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    setSearchParams({ query: '' });
  };

  const updateQueryString = e => {
    const { value } = e.currentTarget;

    setSearchParams({ query: value.toLowerCase() });
  };

  return (
    <>
      <main>
        {loading && <Loader />}
        <h1>Movies</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={updateQueryString}
          />
          <button type="submit">Search</button>
        </form>
        <section>
          <ul>
            <li></li>
          </ul>
        </section>
      </main>
    </>
  );
}
