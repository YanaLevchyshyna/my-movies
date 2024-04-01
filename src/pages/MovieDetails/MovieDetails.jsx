import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import {
  Container,
  BackLink,
  MovieDetailsSection,
  MovieDetailsContainer,
  MovieDetailsContainerImg,
  MovieDetailsImg,
  CircularRatingWrapper,
  MovieDetailsContainerDescription,
  MovieTitle,
  MovieOverview,
  GenresWrapper,
  GenresTitle,
  Genres,
  Genre,
  ReleaseDateWrapper,
  ReleaseDateTitle,
  ReleaseDate,
  RuntimeWrapper,
  RuntimeTitle,
  Runtime,
  Tagline,
  OverviewTitle,
  LinksList,
  AuthorsLink,
  ReviewsLink,
} from './MovieDetails.styled';

import { format, parseISO } from 'date-fns';
import { timeConversion } from 'services/timeConversion';
import CircularRating from 'components/CircularProgressbar/CircularProgressbar';
import Footer from 'components/Footer/Footer';

const movieIdApi = getApi();

function MovieDetails() {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  // console.log('movieId-----', id);
  // console.log('useParams()=====>>', useParams());

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const baseUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  const baseUrlBiggerImg = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  const backdropImgUrl =
    'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchDataMovieDetails = async () => {
      try {
        await movieIdApi.fetchMovieId(id, currentLng).then(response => {
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
  }, [currentLng, id]);

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
      <main>
        <Container>
          {loading && <Loader />}
          {error && <Error />}
          <BackLink to={backLinkLocationRef.current}>
            &larr; {t('movieDetails.backToMovies')}
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
                    <MovieDetailsImg
                      src={`${baseUrl}${poster_path}`}
                      alt={title}
                      srcSet={`${baseUrl}${poster_path} 1x, ${baseUrlBiggerImg}${poster_path} 2x`}
                    />
                  </MovieDetailsContainerImg>
                  <MovieDetailsContainerDescription>
                    <MovieTitle>
                      {title}&nbsp;&#40;{formattedReleaseYear}&#41;
                    </MovieTitle>

                    <ReleaseDateWrapper>
                      <ReleaseDateTitle>
                        {t('movieDetails.releaseВate')}&nbsp;
                      </ReleaseDateTitle>
                      <ReleaseDate>{formattedReleaseFullDate}</ReleaseDate>
                    </ReleaseDateWrapper>
                    <GenresWrapper>
                      <GenresTitle>
                        {t('movieDetails.genres')}&nbsp;
                      </GenresTitle>
                      {genres && (
                        <Genres>
                          {genres.map((genre, index) => (
                            <Genre key={index}>{genre.name}&sbquo;</Genre>
                          ))}
                        </Genres>
                      )}
                    </GenresWrapper>
                    <RuntimeWrapper>
                      <RuntimeTitle>
                        {t('movieDetails.runtime')}&nbsp;
                      </RuntimeTitle>
                      <Runtime>{formattedTime}</Runtime>
                    </RuntimeWrapper>
                    <CircularRatingWrapper>
                      <CircularRating rating={vote_average} />
                    </CircularRatingWrapper>
                    <Tagline>{tagline}</Tagline>
                    <OverviewTitle>{t('movieDetails.overview')}</OverviewTitle>
                    <MovieOverview>{overview}</MovieOverview>
                  </MovieDetailsContainerDescription>
                  {/* <div>
                    <p>{t('playTrailer')}</p>
                  </div> */}
                </MovieDetailsContainer>
              </MovieDetailsSection>
            </div>
          )}
          <section>
            <LinksList>
              <li>
                <AuthorsLink to={`/movies/${id}/cast`}>
                  {t('movieDetails.author')}
                </AuthorsLink>
              </li>
              <li>
                <ReviewsLink to={`/movies/${id}/reviews`}>
                  {t('movieDetails.reviews')}
                </ReviewsLink>
              </li>
            </LinksList>
          </section>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default MovieDetails;
