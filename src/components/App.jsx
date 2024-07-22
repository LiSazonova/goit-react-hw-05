import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<div>MovieDetailsPage</div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
