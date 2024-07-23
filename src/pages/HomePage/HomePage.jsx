import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrending } from '../../api/api';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const data = await getTrending();
        setMovies(data.results);
      } catch (err) {
        toast.error('Network Error');
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
