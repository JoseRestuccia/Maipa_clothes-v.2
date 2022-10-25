import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./AppContainer";
import Item from "./Item";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/855/575/original/hand-drawn-doodle-clothes-hanger-hanger-icon-isolated-on-white-background-vector.jpg"
          alt="Imagen de una percha"
          className="logo"
        />
      </header>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mujeres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hombres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Niños</a>
        </li>
      </ul>
    </div>
  </div>
      </nav>
      <main>
      <AppContainer/>
      </main>

    </div>
  );
}

export default App;
