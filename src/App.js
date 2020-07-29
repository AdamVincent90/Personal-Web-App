import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Grades from "./routes/Grades";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/grades">
            <Grades />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
