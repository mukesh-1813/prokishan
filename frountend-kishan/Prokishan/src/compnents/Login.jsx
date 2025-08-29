import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login logic (replace with backend API later)
    if (phoneNo === "1234567890" && password === "password") {
      setErrorMsg("");
      navigate("/dashboard"); // redirect to dashboard page
    } else {
      setErrorMsg("Invalid Phone Number or Password!");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #e2e3e8ff 0%, #aca4b4ff 100%)",
    },
    card: {
      backgroundColor: "#fff",
      padding: "40px 30px",
      borderRadius: "16px",
      width: "360px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: hover ? "#0a267cff" : "#4facfe",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
      marginBottom: "12px",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Login
          </button>
        </form>

        <button
          onClick={() => navigate("/register")}
          style={{ ...styles.button, backgroundColor: "#34d399" }}
        >
          Register
        </button>

        {errorMsg && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
