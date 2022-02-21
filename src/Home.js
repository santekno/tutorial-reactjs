import { useState } from 'react';

const Home = () => {
  // let name = 'santekno';
  const [name, setName] = useState('santekno');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'ihsan';
    // console.log(name);
    setName('ihsan');
    setAge(29);
  }
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } berumur { age } tahun</p>
      <button onClick={handleClick}>Tekan ini</button>
    </div>
   );
}
 
export default Home;