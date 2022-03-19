import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Santekno Blog</h1>
      <div className="links">
        <Link to="/">Beranda</Link>
        <Link to="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px",
        }}>Tambah Blog</Link>
      </div>
    </div>
  );
}

export default Navbar;