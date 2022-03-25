import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo512.png" className="App-logo" alt="logo" />
        <p>
          Meu primeiro website com React funciona !
        </p>
        <a
          className="App-link"
          href="https://api.lyrics.ovh/v1/u2/one"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lyrics API
        </a>
      </header>
    </div>
  );
}

export default App;
