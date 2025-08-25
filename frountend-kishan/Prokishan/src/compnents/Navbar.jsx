import React from "react";

const Navbar = () => {
  const styles = {
    nav_container: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      height: "60px",
      backgroundColor: "green",
      color: "#fff",
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
      color: "#fff",
      textDecoration: "none",
      margin: "0 10px",
      fontFamily: "sans-serif",
      hover: {
       backgroundColor: "yellow",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "4px",
      textDecoration: "none",
      },
    },
  };

  return (
    <nav style={styles.nav_container}>
      <div style={styles.logo}>MyLogo</div>

      <div>
        <input type="text" placeholder="Search..." style={styles.input} />
      </div>

      <div>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>About</a>
        <a href="#" style={styles.link}>Contact</a>
        <a href="#" style={styles.link}>Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
