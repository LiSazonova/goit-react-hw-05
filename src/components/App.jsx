import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>HomePage</div>} />
        <Route path="/movies" element={<div>HomePage</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetailsPage</div>} />
      </Routes>
    </div>
  );
};

export default App;
