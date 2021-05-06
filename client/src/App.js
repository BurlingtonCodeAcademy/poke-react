import "./App.css";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [offset, setOffset] = useState(null);

  function next() {
    if (offset) {
      let nextBatch = offset + 20;
      setOffset(nextBatch);
    } else {
      setOffset(20);
    }
  }

  function prev() {
    if (offset) {
      let nextBatch = offset - 20;
      setOffset(nextBatch);
    }
  }

  return (
    <div>
      <div id="nav">
        {offset && <button onClick={prev}>Previous</button>}
        <button onClick={next}>Next</button>
      </div>
      <Home offset={offset} />
    </div>
  );
}

export default App;
