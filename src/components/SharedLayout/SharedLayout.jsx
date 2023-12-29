import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import i18next from 'i18next';

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
  return (
    <Container>
      <Header>
        <Logo />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <h3>{i18next.language}</h3>
        <ButtonsWrapper>
          <ButtonEn
            disabled={i18next.language === 'en'}
            onClick={() => i18next.changeLanguage(LOCALS.EN)}
          >
            EN
          </ButtonEn>
          <ButtonUk
            disabled={i18next.language === 'uk'}
            onClick={() => i18next.changeLanguage(LOCALS.UK)}
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
