import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { searchMovies } from '../../api/api';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [noMovies, setNoMovies] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const data = await searchMovies(query);
          setMovies(data);
          setNoMovies(true);
        } catch (error) {
          console.error('Error searching movies:', error);
        }
      };

      fetchMovies();
    }
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newQuery = form.elements.query.value.trim();
    setSearchParams({ query: newQuery });
    setNoMovies(false);
  };

  return (
    <main>
      <SearchBar query={query} onSubmit={handleSubmit} />
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        noMovies && <p>No movies found.</p>
      )}
    </main>
  );
};

export default MoviesPage;
