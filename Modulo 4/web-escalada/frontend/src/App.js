import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../src/styles/App.css';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import SectoresPage from './pages/SectoresPage';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";


function App() {
  return (
    <div className="fondo">
    <Router>
      <Header />
      <Nav />

      <Switch>

        <Route path="/" exact component={HomePage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/contacto" exact component={ContactoPage} />
        <Route path="/sectores" exact component={SectoresPage} />

      </Switch>
      <Footer />
    </Router>
    </div>

  );
}

export default App;
