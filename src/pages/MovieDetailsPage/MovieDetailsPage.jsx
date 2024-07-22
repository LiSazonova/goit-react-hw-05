import { Link } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <ul>
      <li>
        <Link to={'cast'}>Cast</Link>
      </li>
      <li>
        <Link to={'reviews'}>Reviews</Link>
      </li>
    </ul>
  );
};

export default MovieDetailsPage;
