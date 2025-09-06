import Navbar from './compnents/Navbar';
import Login from './compnents/Login';
import Home from './compnents/Home';
import Register from './compnents/register';
import Contact from './compnents/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page with Weather */}
        <Route
          path="/"
          element={
            <>
              <Home />
             
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
