import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
    </div>
    
  );
}

export default App;
