
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="#ffd700" stroke="#ffffff" strokeWidth="2"/>
    <path d="M10 20 L15 15 L20 20 L25 15 L30 20" stroke="#007bff" strokeWidth="3" fill="none"/>
    <circle cx="20" cy="25" r="3" fill="#007bff"/>
  </svg>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="d-flex align-items-center">
              <Logo />
              <Link className="navbar-brand ms-2 brand-title" to="/">OctoFit Tracker</Link>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h2>Willkommen bei OctoFit Tracker!</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
