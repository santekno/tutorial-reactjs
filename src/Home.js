const Home = () => {
  const handleClick = () => {
    console.log("hello, santekno");
  }
  const handleClickAgain = (name) => {
    console.log("hello, " + name);
  }
  const handleClickAgainElement = (name, e) => {
    console.log("hello, " + name, e);
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Test</button>
      <button onClick={() => handleClickAgain("ihsan")}>Click Me Again</button>
      <button onClick={(e) => handleClickAgainElement("ihsan", e)}>Click Me Element</button>
    </div>
  );
}

export default Home;