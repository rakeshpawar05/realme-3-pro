import React from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Introduction from './components/Introduction/Introduction.js';
import CustomROM from './components/CustomROM/CustomROM.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Introduction} />
          <Route path='/customrom' component={CustomROM} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
