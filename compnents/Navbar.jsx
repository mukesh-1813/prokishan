import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    nav_container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "60px",
      backgroundColor: "green",
      color: "#fff",
      padding: "0 20px",
      borderRadius: "8px",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#fff",
    },
    input: {
      padding: "8px",
      borderRadius: "4px",
      border: "none",
      outline: "none",
    },
    link: {
      textDecoration: "none",
      margin: "0 10px",
      fontFamily: "sans-serif",
      padding: "6px 10px",
      borderRadius: "4px",
      transition: "background-color 0.3s ease, color 0.3s ease",
      color: "white",
    },
    hamburger: {
      display: "none",
      fontSize: "28px",
      cursor: "pointer",
    },
    mobileMenu: {
      display: isOpen ? "flex" : "none",
      flexDirection: "column",
      backgroundColor: "green",
      position: "absolute",
      top: "60px",
      right: "0",
      width: "200px",
      padding: "10px",
      borderRadius: "8px",
    },
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-links {
              display: none;
            }
            .hamburger {
              display: block !important;
            }
          }
        `}
      </style>

      <nav style={styles.nav_container}>
        <div style={styles.logo}>MyLogo</div>

        <div className="desktop-links">
          <input type="text" placeholder="Search..." style={styles.input} />
          <Link to="/" style={styles.link} className="naviteam">Home</Link>
          <Link to="/about" style={styles.link} className="naviteam">About</Link>
          <Link to="/contact" style={styles.link} className="naviteam">Contact Us</Link>
          <Link to="/login" style={styles.link} className="naviteam">Login</Link>
          <Link to="/schemes" style={styles.link} className="naviteam">Schemes</Link>
        </div>

        {/* Hamburger Button */}
        <div
          className="hamburger"
          style={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" style={styles.link} onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" style={styles.link} onClick={() => setIsOpen(false)}>Contact Us</Link>
        <Link to="/login" style={styles.link} onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/schemes" style={styles.link} onClick={() => setIsOpen(false)}>Schemes</Link>
      </div>
    </>
  );
};

export default Navbar;
