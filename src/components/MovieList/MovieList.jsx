import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.container}>
      {movies.map(movie => (
        <li key={movie.id} className={s.cardWrapper}>
          <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.original_title}
            />
            <h3 className={s.movieName}>{movie.original_title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
