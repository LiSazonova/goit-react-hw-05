import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrending } from '../../api/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const data = await getTrending();
        setMovies(data.results);
      } catch (err) {
        console.error('Error fetching trending movies:', err);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;
