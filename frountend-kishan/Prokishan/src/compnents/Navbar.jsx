import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    nav_container: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      height: "60px",
      backgroundColor: "green",
      color: "#fff",
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
      color: "white", // default link color
    },
  };

  return (
    <>
      <style>
        {`
          .naviteam:hover {
            background-color: yellow;
            color: black !important;
          }
        `}
      </style>

      <nav style={styles.nav_container}>
        <div style={styles.logo}>MyLogo</div>

        <div>
          <input type="text" placeholder="Search..." style={styles.input} />
        </div>

        <div>
          <Link to="/" style={styles.link} className="naviteam"><span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '5px', marginBottom: '4.5px' }}>home</span>Home</Link>
          <Link to="/about" style={styles.link} className="naviteam"><span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '5px' }}>info</span>About</Link>
          <Link to="/contact" style={styles.link} className="naviteam"><span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '5px' }}>contacts</span>Contact Us</Link>
          <Link to="/login" style={styles.link} className="naviteam"><span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '5px' }}>login</span>Login</Link>
          <Link to="/schemes" style={styles.link} className="naviteam"><span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '5px' }}>account_balance</span>Schemes</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
