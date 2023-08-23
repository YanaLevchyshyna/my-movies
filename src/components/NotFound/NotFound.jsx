import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home';

export const NotFound = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
