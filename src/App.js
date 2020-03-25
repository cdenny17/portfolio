import React from 'react';
import Home from './components/home'
import Projects from './components/projects'
import Resume from './components/resume'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
