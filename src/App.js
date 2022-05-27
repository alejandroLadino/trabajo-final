import logo from './logo.svg';
import './App.css';

import Titulo from './components/Titulo';
import Informacion from './components/Informacion';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Aptitudes from './components/Aptitudes';
import Lenguas from './components/Lenguas';

function App() {
  return (
    <div className="App">
    <header>
      <Titulo></Titulo>
    </header>
    <Informacion/>
    <Experiencia/>
    <Educacion/>
    <Aptitudes/>
    <Lenguas/>
    </div>
  );
}

export default App;

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit hola <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */