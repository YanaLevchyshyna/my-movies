import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getApi from 'services/fetchApi';
import Loader from 'components/Loader/Loader';
import { DefaultImg, CastList, ActorName } from './Cast.styled';

const movieIdApi = getApi();

export default function Cast() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  // console.log('currentLng', language);

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
        // console.log('CAST', cast);
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
                <li key={actor.name}>
                  {actor.profile_path ? (
                    <img
                      src={`${baseUrl}${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <DefaultImg />
                  )}
                  <ActorName>{t(actor.name)}</ActorName>
                  <p>
                    {t('character')}: {actor.character}
                  </p>
                </li>
              ))}
            </CastList>
          </div>
        </section>
      )}
    </>
  );
}
