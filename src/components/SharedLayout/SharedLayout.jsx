import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
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
        <ButtonsWrapper>
          <ButtonEn>EN</ButtonEn>
          <ButtonUk>UK</ButtonUk>
        </ButtonsWrapper>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
