import './App.css';


function App() {
  const title = 'Selamat Datang di Santekno Blog';
  const likes = 50;
  const link = "https://google.com/";

  return (
    <div className="App">
      <div className='content'>
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
