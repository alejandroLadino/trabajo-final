import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    <header>
    <div className="name">
        <div className="img">
            <img src="foto.jpg" alt=""/>
        </div>
        <div className="content">
            <p className="p-1">Alejandro Ladino Galvis</p>
            <p className="p-2">25 años, Estudiante de Ingeniería de sistemas y telecomunicaciones</p>
        </div>
    </div>
    </header>
      <div className="info">
        <p className="titleSeccion">Información personal</p>
        <p className="titleInfo">Nombre y Apellidos:</p>
        <p className="infoInfo">Alejandro Ladino Galvis</p><br/>
        <p className="titleInfo">Dirección:</p>
        <p className="infoInfo">Calle 51G # 34-70</p><br/>
        <p className="titleInfo">Teléfono:</p>
        <p className="infoInfo">3216092882</p><br/>
        <p className="titleInfo">Email:</p>
        <p className="infoInfo">alejoladino0724@gmail.com</p><br/>
        <p className="titleInfo">Fecha de nacimiento:</p>
        <p className="infoInfo">24 de Julio del 1996</p><br/>
        <p className="titleInfo">Cédula:</p>
        <p className="infoInfo">1053851366</p><br/>
    </div>
    <div className="info">
        <p className="titleSeccion">Experiencia laboral</p>
        <p className="titleInfo">Feryeik Jeans:</p>
        <p className="infoInfo">Asesor comercial</p><br/>
        <p className="titleInfo">Fabi Sport:</p>
        <p className="infoInfo">Asesor comercial</p><br/>
        <p className="titleInfo">Comdata Group:</p>
        <p className="infoInfo">Asesor comercial</p><br/>
        <p className="titleInfo">Comdata Group:</p>
        <p className="infoInfo">Auditor de calidad</p><br/>
        <p className="titleInfo">Comdata Group:</p>
        <p className="infoInfo">Consultor Analytics (Cargo actual)</p><br/>
    </div>
    <div className="info">
        <p className="titleSeccion">Educación e Información</p>
        <p className="titleInfo">Institución Educativa Rural Miguel Antonio Caro:</p>
        <p className="infoInfo">Primaria</p><br/>
        <p className="titleInfo">Institución Educativa Rural Miguel Antonio Caro:</p>
        <p className="infoInfo">Secundaria</p><br/>
        <p className="titleInfo">Universidad de Manizales:</p>
        <p className="infoInfo">Ingeniería de sistemas y telecomunicaciones (cursando actualmente)</p><br/>
    </div>
    <div className="info">
        <p className="titleSeccion">Aptitudes y Pasatiempos</p>
        <p className="titleInfo">Aptitudes:</p>
        <p className="infoInfo">Soy ágil, me gusta el trabajo en equipo, facil adaptación al cambio, puedo trabajar bajo presión, me considero muy responsable y proactiva en todo lo que hago.</p><br/>
        <p className="titleInfo">Pasatiempos:</p>
        <p className="infoInfo">El cine, salir a comer, ir a bailar, estudiar y leer.</p><br/>
    </div>
    <div className="info">
        <p className="titleSeccion">Lenguas</p>
        <p className="titleInfo">Materna:</p>
        <p className="infoInfo">Español</p><br/>
        <p className="titleInfo">Secundaria:</p>
        <p className="infoInfo">Inglés, nivel básico</p><br/>
    </div>
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