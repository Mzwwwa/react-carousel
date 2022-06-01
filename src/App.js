import "./App.css";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="app">
      <div className="app__inner">
        <h1>
          What are you <br />
          <strong>here to do?</strong>
        </h1>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
