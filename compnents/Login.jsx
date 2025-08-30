import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        phone_no: phoneNo,
        password: password,
      });

      if (response.status === 200) {
        setErrorMsg("");
        toast.success("✅ Login successful!", { position: "top-center" }); // success toast
        setTimeout(() => {
          navigate("/dashboard"); // redirect after toast
        }, 1000); // 1-second delay so user sees the toast
      }
    } catch (error) {
      if (error.response?.data?.error) {
        setErrorMsg(error.response.data.error); // show backend error
        toast.error(error.response.data.error, { position: "top-center" }); // error toast
      } else {
        setErrorMsg("Server not responding. Check backend.");
        toast.error("❌ Server not responding", { position: "top-center" });
      }
    }
  };

  const styles = {
    container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "linear-gradient(135deg, #e2e3e8ff 0%, #aca4b4ff 100%)" },
    card: { backgroundColor: "#fff", padding: "40px 30px", borderRadius: "16px", width: "360px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", textAlign: "center" },
    input: { width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc", outline: "none", fontSize: "14px" },
    button: { width: "100%", padding: "12px", border: "none", borderRadius: "8px", backgroundColor: hover ? "#0a267cff" : "#4facfe", color: "white", fontSize: "16px", cursor: "pointer", marginBottom: "12px", transition: "0.3s" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Phone Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required style={styles.input} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input} />
          <button type="submit" style={styles.button} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Login</button>
        </form>

        <button onClick={() => navigate("/register")} style={{ ...styles.button, backgroundColor: "#34d399" }}>Register</button>

        {errorMsg && <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>}
      </div>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
