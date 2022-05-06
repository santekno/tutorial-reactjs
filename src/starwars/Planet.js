import { useState } from "react";

const fetchPlanets = async() => {
  const res = await fetch('https://swapi.dev/api/planets/');
  return res.json();
}
const Planet = () => {
  return (
    <div className="planet">
      <h2>Planet Info</h2>
    </div>
  );
}

export default Planet;