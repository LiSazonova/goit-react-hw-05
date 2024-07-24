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

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div>
      <ul className={s.container}>
        {cast.map(member => (
          <li key={member.cast_id} className={s.cardWrapper}>
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
                  : defaultImg
              }
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
