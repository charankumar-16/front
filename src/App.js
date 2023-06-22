import "./App.css";

const App = () => {
  console.log("charan");

  return (
    <div className="bg-container">
      <div className="top-container">
        <h1 className="heading">K90CK</h1>
      </div>
      <div className="mid-container">
        <p className="desc"> Welcome to the Food Hub</p>
      </div>
      <div className="last-first-container">
        <button className="btn">
          Begin
          <br />
          Journey{" "}
        </button>
      </div>
      <div className="last-second-container">
        <p className="about">privacy</p>
        <p className="about">Help</p>
        <p className="about">Terms</p>
      </div>
    </div>
  );
};

export default App;
