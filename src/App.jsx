import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Users from './pages/Users';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
