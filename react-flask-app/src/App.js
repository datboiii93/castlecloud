import React, {useState, useEffect} from 'react';
//import logo from 'assets/images/cctransparent-01.png';
import cclogo from './assets/images/cctransparent-01.png';
import './App.css';

function App() {
  const[helloMessage, setMessage] = useState({message: 'friend'});

  useEffect(() => {
    fetch('/message').then(res => res.json()).then(data => {
      setMessage({message: data.Message});
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
        <img src={cclogo} className="cc-logo" alt="logo" />
          <a href="#">Home</a>
          <a href="#">Find Your Castle</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload. Or else.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>Message says: {helloMessage?.message}.</p>
      </header>
      <div className="overview">
        <h1>Let's Start-y the Party!</h1>
        <p>Here at Castle Cloud, we don't just rent castles - we create memories. 
          Each castle is checked for safety and cleaned thoroughly before each rental to keep your party going!</p>
        <a href="#">Start browsing now!</a>
      </div>
      <div className="footer">
        <h1>Footer goes here</h1>
      </div>
    </div>
  );
}

export default App;
