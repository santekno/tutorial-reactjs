import { useState } from "react";
import People from "./People";
import Planet from "./Planet";

const Starwars = () => {
  const[page, setPage] = useState('planets');

  return (
    <div className="starwars-info">
      <h2>Star Wars Info</h2>
      <button onClick={()=> setPage('planet' )}>Planets</button> &nbsp;
      <button onClick={()=> setPage('people')}>People</button>
      <div className="content">
        { page ==='planet' ? <Planet /> : <People />}
      </div>
    </div>
  );
}

export default Starwars;