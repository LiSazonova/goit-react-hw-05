import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api/api';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <ul className={s.container}>
        {cast.map(member => (
          <li key={member.cast_id} className={s.cardWrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
              alt={member.original_title}
            />
            <div className={s.memberWrapper}>
              <p>{member.name}</p>
              <p>Character: {member.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
