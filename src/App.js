import { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./components/Register.css";
import './App.css';

import Register from "./components/Register";

class App extends Component {

  render() {
    return(
      <div>
        <Register />
      </div>
    )
  }
}

export default App;
