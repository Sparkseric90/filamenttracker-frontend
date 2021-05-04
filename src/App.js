import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddFilament from "./components/AddFilament";
import Filament from "./components/Filament";
import FilamentList from "./components/FilamentList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Sparks3DDesigns
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/filament"} className="nav-link">
              Filaments
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/filament"]} component={FilamentList} />
          <Route exact path="/add" component={AddFilament} />
          <Route path="/filament/:id" component={Filament} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
