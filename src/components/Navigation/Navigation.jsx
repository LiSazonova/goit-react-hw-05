import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
