// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumeForm from "./components/ResumeForm";



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/" element={<ResumeBuilder/> } />
           <Route path="/src/components/ResumeForm.jsx" element={<ResumeForm/>} />
        
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
