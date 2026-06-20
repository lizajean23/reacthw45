import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <p className="home__eyebrow">MacBook Air and MacBook Pro</p>
        <h1 className="home__title">Power that moves with you.</h1>
        <p className="home__description">
          M-series chip. All-day battery life. A stunning Retina display that
          brings everything to life. MacBook is your perfect partner for work
          and creativity.
        </p>
        <p className="home__price">From $999 or $41.62/mo. for 24 mo.*</p>
        <Link to="/users" className="home__button">
          View Users
        </Link>
      </div>
      <div className="home__image-wrap">
        <img
          src="/hero.jpg"
          alt="MacBook — modern laptop"
          className="home__image"
        />
      </div>
    </section>
  );
}
