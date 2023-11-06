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
  CircularRatingWrap,
  MovieDetailsContainerDescription,
  MovieTitle,
  DivWrapp,
  MovieOverview,
  Genres,
  Genre,
  ReleaseDate,
  Runtime,
  Tagline,
  OverviewTitle,
} from './MovieDetails.styled';

import { format, parseISO } from 'date-fns';
import { timeConversion } from 'services/timeConversion';
import CircularRating from 'components/CircularProgressbar/CircularProgressbar';
import Footer from 'components/Footer/Footer';

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
    title,
    release_date,
    vote_average,
    genres,
    tagline,
    overview,
    runtime,
  } = movie;

  //  Змінюємо формат release_date "2023-10-18" на "2023"
  const parsedReleaseDate = new Date(release_date); // Парсинг рядка у дату
  const formattedReleaseYear = format(parsedReleaseDate, 'yyyy'); // Форматування року

  // Спочатку розпарсіть рядок дати в об'єкт Date
  const parsedDate = parseISO(release_date);

  // Потім використовуйте функцію format для зміни формату
  const formattedReleaseFullDate = format(parsedDate, 'dd/MM/yyyy');

  const largeImage = `${backdropImgUrl}${backdrop_path}`;

  const formattedTime = timeConversion(runtime);

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
                <img src={`${baseUrl}${poster_path}`} alt={title} />
              </MovieDetailsContainerImg>
              <MovieDetailsContainerDescription>
                <MovieTitle>
                  {title}&nbsp;&#40;{formattedReleaseYear}&#41;
                </MovieTitle>
                <DivWrapp>
                  <ReleaseDate>
                    {formattedReleaseFullDate} &bull;&nbsp;
                  </ReleaseDate>
                  {/* жанри фільму */}
                  {genres && (
                    <Genres>
                      {genres.map((genre, index) => (
                        <Genre key={index}>{genre.name}&sbquo;</Genre>
                      ))}
                    </Genres>
                  )}
                  <Runtime>&nbsp;&bull; {formattedTime}</Runtime>
                </DivWrapp>
                <CircularRatingWrap>
                  <CircularRating rating={vote_average} />
                </CircularRatingWrap>
                <Tagline>{tagline}</Tagline>
                <OverviewTitle>Overview</OverviewTitle>
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
      <Footer />
    </>
  );
}

export default MovieDetails;
