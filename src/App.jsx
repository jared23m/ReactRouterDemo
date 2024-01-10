import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Blue from "./components/blue.jsx"
import Red from "./components/red.jsx"
import Home from "./components/home.jsx"

function App() {

  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link className="navLink" id="blueLink" to={"/blue"}>Blue</Link>
        <Link className="navLink" id="redLink" to={"/red"}>Red</Link>
        <Link className="navLink" id="homeLink" to={"/home"}>Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
