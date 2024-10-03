import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
// import { Route, Switch, Router, BrowserRouter, Link} from 'react-router'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light'); //state of theme

  const [alert, setAlert] = useState(null); // alert state


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
      if(mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#1c1c1c';
        showAlert('Dark mode has been enable', "success");
        document.title = ('TextUtils Dark Mode Enable')
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been enable', "success");
        document.title = ('TextUtils Light Mode Enable')
      }
  }


  return (

    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
                <Route path="/about">
                  <About mode={mode} />
                </Route>
              <Route path="/">
                <TextForm heading="Enter the text to analyzse below" mode={mode} showAlert={showAlert}  />
              </Route>
            
          </Switch>

        
        </div>
    </Router>
    </>
  
);
}

export default App;
