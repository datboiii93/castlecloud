import React, {useState, useEffect} from 'react';
//import logo from 'assets/images/cctransparent-01.png';
import cclogo from './assets/images/cctransparent-01.png';
import './App.css';

function App() {
  const[helloMessage, setMessage] = useState({message: 'friend'});
  const [ApiTest, setApiTest] = useState('default');
 
  useEffect(() => {
    fetch('/message').then(res => res.json()).then(data => {
      setMessage({message: data.Message});
    });
  }, []);

  // useEffect((ApiTest) => {
  //   fetch('/testMessage').then(res => res.json()).then(data => {
  //     setApiTest({apiTest: data.apiTest});
  //   });
  // }, [ApiTest]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'phrase': ApiTest})
    };
    console.log(fetch('/login', requestOptions));
    return null;
    // alert(`The message you entered was: ${ApiTest}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          {/* <img src={cclogo} className="cc-logo" alt="logo" /> */}
          <a href="#">Home</a>
          <a href="#">Find Your Castle</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <p>Message says: {helloMessage?.message}.</p>
        <p>Sent Message says: {ApiTest}</p>
      </header>
      <div className="overview">
        <h1>Let's Start-y the Party!</h1>

        <button onClick={getRequest}>Test Get API</button>

        <form onSubmit={handleSubmit}>
          <label htmlFor="sampleString">Test phrase:
            <input 
              type="text" 
              value={ApiTest}
              name="testApi"
              onChange={(e) => setApiTest(e.target.value)}
            />
          </label>
          <input 
            type="submit"
            value="Post Test"
          />
        </form>

        <h2>Cool inflating graphic here?</h2>
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

export function getRequest(){
  const requestOptions = {
    method: 'GET',
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({phrase: 'Hello API'})
  };
  console.log(fetch('/login', requestOptions)
  .then(response => response.json())
  );
  return null;
}

export default App;
