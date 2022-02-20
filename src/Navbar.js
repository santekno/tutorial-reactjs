import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Santekno Blog</h1>
      <div className="links">
        <a href="/">Beranda</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "8px",
        }}>Tambah Blog</a>
      </div>
    </div>
  );
}

export default Navbar;