import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          Horizon
        </NavLink>
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__link${isActive ? ' header__link--active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `header__link${isActive ? ' header__link--active' : ''}`
            }
          >
            Users
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
