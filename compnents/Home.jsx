const Home = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "80%",
          maxWidth: "1200px",
          height: "75%",
          padding: "40px",
          backgroundColor: "#fff",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          borderRadius: "16px",
        }}
        className="continerhome"
      >
        {/* Top Section: Welcome + Image */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <div style={{ textAlign: "center", flex: 1 }}>
            <h1 style={{ fontSize: "3.5rem", margin: 0 }}>Welcome</h1>
          </div>

          <div className="logo" style={{ flexShrink: 0 }}>
            <img
              src="your-image-url.jpg"
              alt="Logo"
              style={{ width: "350px", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </div>

        {/* Scrolling Text */}
        <div style={{ marginBottom: "20px", overflow: "hidden", whiteSpace: "nowrap" }}>
          <marquee behavior="scroll" direction="left" scrollamount="6" style={{ fontSize: "1.5rem", color: "#1976d2" }}>
            🌾 Welcome Farmers 🌾
          </marquee>
        </div>

        {/* Weather Report */}
        <div
          style={{
            backgroundColor: "#e0f7fa",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: "0 0 10px" }}>Weather Report</h2>
          <p style={{ margin: 0 }}>🌤️ Sunny, 32°C in Gandepalli</p>
        </div>

        {/* Register Button */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "12px 24px",
              fontSize: "1rem",
              backgroundColor: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
