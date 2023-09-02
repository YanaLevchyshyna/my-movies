import { Routes, Route, Link, Navigate } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>
        The resource you requested could not be found. Please go to the
        <Link to="/">Home</Link>
        page.
      </p>

      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
