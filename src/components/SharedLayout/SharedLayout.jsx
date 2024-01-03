import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import 'i18n';
import { LOCALS } from 'i18n/lng-constant.js';
import Loader from 'components/Loader/Loader';
import { Logo } from 'components/Logo/Logo';
import {
  Container,
  Header,
  Link,
  ButtonsWrapper,
  ButtonEn,
  ButtonUk,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Header>
        <Logo />
        <nav>
          <Link to="/">{t('home')}</Link>
          <Link to="/movies">{t('movies')}</Link>
        </nav>
        <ButtonsWrapper>
          <ButtonEn
            disabled={i18n.language === LOCALS.EN}
            onClick={() => i18n.changeLanguage(LOCALS.EN)}
          >
            EN
          </ButtonEn>
          <ButtonUk
            disabled={i18n.language === LOCALS.UK}
            onClick={() => i18n.changeLanguage(LOCALS.UK)}
          >
            UK
          </ButtonUk>
        </ButtonsWrapper>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
