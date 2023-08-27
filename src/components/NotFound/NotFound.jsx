import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';

export const NotFound = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
