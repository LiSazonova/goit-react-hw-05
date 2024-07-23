import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.original_title}
            />
            <h3>{movie.original_title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
