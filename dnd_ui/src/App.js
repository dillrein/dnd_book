import logo from './assets/images/red_d20.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Adventure awaits!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          type="button"
        >
          Roll for initiative.
        </a>
      </header>
    </div>
  );
}

export default App;
