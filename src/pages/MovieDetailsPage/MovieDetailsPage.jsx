import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../api/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = useRef(location.state?.from || '/movies');

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main>
      <button
        className={s.backBtn}
        type="button"
        onClick={() => navigate(previousLocation.current)}
      >
        {' '}
        Go back
      </button>
      <div>
        <h1 className={s.titleWrapper}>{movie.original_title}</h1>
      </div>
      <div className={s.imgWrapper}>
        <img
          className={s.imgMovie}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
        <p className={s.movieDescr}>{movie.overview}</p>
      </div>
      <ul className={s.navBarCastReviews}>
        <li>
          <Link
            className={s.linkNavBar}
            to={'cast'}
            state={{ from: previousLocation.current }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className={s.linkNavBar}
            to={'reviews'}
            state={{ from: previousLocation.current }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
