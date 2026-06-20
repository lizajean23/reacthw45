import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          © {new Date().getFullYear()} Horizon. All rights reserved.
        </p>
        <p className="footer__note">
          Data from{' '}
          <a
            href="https://jsonplaceholder.typicode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            JSONPlaceholder
          </a>
        </p>
      </div>
    </footer>
  );
}
