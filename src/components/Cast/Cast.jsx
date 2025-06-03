import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import {
  DefaultImg,
  CastList,
  CastItem,
  ActorWrapper,
  ActorName,
  ActorCharacter,
  Span,
} from './Cast.styled';

const movieIdApi = getApi();

export default function Cast() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const baseUrl = 'https://image.tmdb.org/t/p/w200/';

  useEffect(() => {
    setLoading(true);

    const fetchDataMovieActors = async () => {
      try {
        const { cast } = await movieIdApi.fetchMovieActors(id, language);
        if (cast.length === 0) {
          toast.error('The resource you requested could not be found.', {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        }
        setCast(cast);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataMovieActors();
  }, [id, language]);

  return (
    <>
      {loading && <Loader />}

      {cast && (
        <section>
          <div>
            <CastList>
              {cast.map(actor => (
                <CastItem key={actor.name}>
                  <div>
                    {actor.profile_path ? (
                      <img
                        src={`${baseUrl}${actor.profile_path}`}
                        alt={actor.name}
                      />
                    ) : (
                      <DefaultImg />
                    )}
                  </div>
                  <ActorWrapper>
                    <ActorName>{t(actor.name)}</ActorName>
                    <ActorCharacter>
                      {t('movieDetails.character')}:&nbsp;
                      <Span>{actor.character}</Span>
                    </ActorCharacter>
                  </ActorWrapper>
                </CastItem>
              ))}
            </CastList>
          </div>
        </section>
      )}
    </>
  );
}
