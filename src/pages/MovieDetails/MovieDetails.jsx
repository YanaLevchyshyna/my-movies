import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import {
  BackLink,
  MovieDetailsSection,
  MovieDetailsContainer,
  MovieDetailsContainerImg,
  MovieDetailsContainerDescription,
  MovieTitle,
  DivWrapp,
  MovieOverview,
  Genres,
  Genre,
  ReleaseDate,
  Runtime,
  VoteAverage,
  Tagline,
} from './MovieDetails.styled';

import { format } from 'date-fns';

const movieIdApi = getApi();

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  // console.log('movieId-----', id);
  // console.log('useParams()=====>>', useParams());

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const baseUrl = 'https://image.tmdb.org/t/p/w300/';
  const backdropImgUrl =
    'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchDataMovieDetails = async () => {
      try {
        await movieIdApi.fetchMovieId(id).then(response => {
          // console.log('response ==>', response);

          if (response.success === false) {
            setError(
              new Error('The resource you requested could not be found.')
            );
          }
          setMovie(response);
        });
      } catch (error) {
        setError(new Error('The resource you requested could not be found.'));
      } finally {
        setLoading(false);
      }
    };
    fetchDataMovieDetails();
  }, [id]);

  if (!movie) {
    return;
  }
  const {
    poster_path,
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    genres,
    tagline,
    overview,
    runtime,
  } = movie;

  //  Змінюємо формат release_date "2023-10-18" на "2023"
  const parsedReleaseDate = new Date(release_date); // Парсинг рядка у дату
  const formattedReleaseDate = format(parsedReleaseDate, 'yyyy'); // Форматування року

  const largeImage = `${backdropImgUrl}${backdrop_path}`;

  return (
    <>
      {loading && <Loader />}

      {error && <Error />}

      <BackLink to={backLinkLocationRef.current}>
        &larr; Back to movies
      </BackLink>

      {movie && (
        <div
          style={{
            borderBottom: '1 solid rgba(31.5, 31.5, 31.5, 1)',
            backgroundPosition: 'left calc((50vw - 170px) - 340px px) top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `linear-gradient(
    to right,
    rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
    rgba(31.5, 31.5, 31.5, 0.84) 50%,
    rgba(31.5, 31.5, 31.5, 0.84) 100%
  ), url(${largeImage})`,
          }}
        >
          <MovieDetailsSection>
            <MovieDetailsContainer>
              <MovieDetailsContainerImg>
                <img src={`${baseUrl}${poster_path}`} alt={original_title} />
              </MovieDetailsContainerImg>
              <MovieDetailsContainerDescription>
                <MovieTitle>
                  {original_title}&nbsp;&#40;{formattedReleaseDate}&#41;
                </MovieTitle>
                <DivWrapp>
                  <ReleaseDate>{release_date}</ReleaseDate>
                  {/* жанри фільму */}
                  {genres && (
                    <Genres>
                      {genres.map((genre, index) => (
                        <Genre key={index}>{genre.name}</Genre>
                      ))}
                    </Genres>
                  )}
                  <Runtime>{runtime}</Runtime>
                </DivWrapp>
                <VoteAverage>{vote_average}</VoteAverage>
                <Tagline>{tagline}</Tagline>
                <MovieOverview>{overview}</MovieOverview>
              </MovieDetailsContainerDescription>
            </MovieDetailsContainer>
          </MovieDetailsSection>
        </div>
      )}
      <section>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>Actors</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
}

export default MovieDetails;
