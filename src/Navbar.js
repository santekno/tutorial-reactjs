import React from 'react';

const Navbar = () => {
  return ( 
    <div className="navbar">
      <h1>Santekno Blog</h1>
      <div className="links">
        <a href="/">Beranda</a>
        <a href="/create">Tambah Blog</a>
      </div>
    </div>
   );
}
 
export default Navbar;