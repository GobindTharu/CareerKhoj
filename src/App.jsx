// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/" element={<Home/>} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
