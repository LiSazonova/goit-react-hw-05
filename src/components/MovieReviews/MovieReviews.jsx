import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/api';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div className={s.container}>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li className={s.cardReview} key={review.id}>
              <h3 className={s.cardTitle}>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;
