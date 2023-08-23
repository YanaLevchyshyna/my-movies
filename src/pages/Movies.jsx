import { Link, Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">"Reviews"</Link>
        </li>
      </ul>
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, nesciunt
          veniam. Excepturi itaque, voluptates fugiat perspiciatis quo saepe!
          Iste eaque porro eveniet error dicta, modi ipsum hic quis minima
          inventore.
        </p>
      </section>
      <Outlet />
    </div>
  );
};
