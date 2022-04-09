import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Maaf</h2>
      <p>Halaman tidak ditemukan.</p>
      <Link to="/">Kembali ke Beranda</Link>

    </div>
   );
}
 
export default NotFound;