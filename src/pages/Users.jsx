import { useEffect, useState } from 'react';
import './Users.css';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load user data');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="users">
        <div className="users__header">
          <h1 className="users__title">Users</h1>
          <p className="users__subtitle">Loading data...</p>
        </div>
        <div className="users__loading">
          <div className="users__spinner" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="users">
        <div className="users__header">
          <h1 className="users__title">Users</h1>
          <p className="users__error">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="users">
      <div className="users__header">
        <h1 className="users__title">Users</h1>
        <p className="users__subtitle">
          {users.length} users loaded from JSONPlaceholder API
        </p>
      </div>
      <div className="users__grid">
        {users.map((user) => (
          <article key={user.id} className="users__card">
            <div className="users__avatar">
              {user.name.charAt(0)}
            </div>
            <h2 className="users__name">{user.name}</h2>
            <dl className="users__details">
              <div className="users__row">
                <dt>Username</dt>
                <dd>{user.username}</dd>
              </div>
              <div className="users__row">
                <dt>Email</dt>
                <dd>{user.email}</dd>
              </div>
              <div className="users__row">
                <dt>City</dt>
                <dd>{user.address.city}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
