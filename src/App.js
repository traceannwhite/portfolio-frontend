import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header>
        <NavBar />
      </Header>
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
