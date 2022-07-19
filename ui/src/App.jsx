import './App.css';

function App() {
  const handleHeaderClick = () => {
    console.log('Hee hee');
  };

  return (
    <div className="App">
      <header className="App-header" onClick={handleHeaderClick}>
        <h1>Castle Cloud</h1>
      </header>
    </div>
  );
}

export default App;
