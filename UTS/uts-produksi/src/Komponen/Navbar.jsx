import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#222",
        padding: "15px",
      }}
    >
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Dashboard
      </Link>

      <Link to="/input" style={{ color: "white", marginRight: "20px" }}>
        Input Produksi
      </Link>

      <Link to="/riwayat" style={{ color: "white" }}>
        Riwayat
      </Link>
    </nav>
  );
}

export default Navbar;
