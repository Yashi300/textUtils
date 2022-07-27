import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[Mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  // const[color, setColor]=useState('white');

  const showAlert = (message, type) =>{
     setAlert({
      msg:message,
      type:type
     })
  }
  setTimeout(() => {
    setAlert(null);
  }, 2000);

 const toggleMode = () =>{
    if(Mode === "dark"){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success ");
      // document.title="TextUtils - Dark Mode";
    } else {
      setMode('dark'); 
      // document.body.style.backgroundColor=cls;
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success ");
      // document.title="TextUtils - Light Mode";
    }
  }

  return (
  <>
  <Router>
  <Navbar title="TextUtils" aboutUs="About" mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} /> */}
    <Routes>
          <Route exact path="/About" element={<About mode={Mode}/>}/>
          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={Mode} showAlert={showAlert} />}/>
    </Routes>
    </div>
  </Router>
  </>
  );
};

export default App;
