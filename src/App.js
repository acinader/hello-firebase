import logo from './logo.svg';
import './App.css';
import LoginControl from './LoginControl.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginControl></LoginControl>
      </header>
    </div>
  );
}

export default App;
