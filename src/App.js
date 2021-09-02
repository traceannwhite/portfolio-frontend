import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.sass";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
