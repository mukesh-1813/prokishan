import Navbar from './compnents/Navbar';
import Login from './compnents/Login';
import Home from './compnents/Home';
import Register from './compnents/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
