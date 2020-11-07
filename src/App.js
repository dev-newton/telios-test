import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Containers/Home";
import AboutUs from "./Containers/AboutUs";

function App() {
  return (
    <Router>
      <div className="">
        <Route exact component={Home} path="/" />
        <Route exact component={AboutUs} path="/about-us" />
      </div>
    </Router>
  );
}

export default App;
