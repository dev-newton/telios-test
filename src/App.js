import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Containers/Home";

function App() {
  return (
    <Router>
      <div className="">
        <Home />
      </div>
    </Router>
  );
}

export default App;
