import React from 'react';
import topBar from './components/layout/topBar';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Create from './components/pages/Create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <topBar/>
          <Router>
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/poi/create" component={Create}/>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
