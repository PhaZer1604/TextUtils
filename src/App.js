import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#191919';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text Utilities" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />} />
      
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode}/>}/>
              
      </Routes>
        
      </div>
      
    </Router>  
    </>
  );
}

export default App;
