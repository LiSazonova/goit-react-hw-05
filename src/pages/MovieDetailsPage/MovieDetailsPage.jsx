import { Link, Outlet } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <div>
      <button type="button"> Go back</button>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
        <Outlet />
      </ul>
    </div>
  );
};

export default MovieDetailsPage;
