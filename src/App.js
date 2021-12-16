import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      
      
      <header className="App-header">
      <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={"https://i.pinimg.com/474x/79/d6/bb/79d6bb092fb230829d9275c7c5caafd4.jpg"} />
        <p>
          happy
        </p>
		
		<p> haha xd </p>
		
		<Greet/>
		<Button/>
    <div style={{ 
      backgroundImage: `url("https://i.pinimg.com/474x/79/d6/bb/79d6bb092fb230829d9275c7c5caafd4.jpg")` 
    }}>
      Hello World
    </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
