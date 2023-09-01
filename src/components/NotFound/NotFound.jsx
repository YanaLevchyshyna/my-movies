import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';

export const NotFound = () => {
  return (
    <div>
      <p>The resource you requested could not be found.</p>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
