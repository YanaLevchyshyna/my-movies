import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { NotFound } from './NotFound/NotFound';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  :active {
    color: hotpink;
    box-shadow: 0 2.8px 2.2px red, 0 6.7px 5.3px blue, 0 12.5px 10px green,
      0 22.3px 17.9px purple, 0 41.8px 33.4px orange, 0 100px 80px teal;
  }
`;

export default function App() {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
