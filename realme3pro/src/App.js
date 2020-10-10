import React from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Introduction from './components/Introduction/Introduction.js';
import CustomROM from './components/CustomROM/CustomROM.js';
import Stockrom from './components/Stockrom/Stockrom.js';
import Others from './components/Others/Others.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Introduction} />
          <Route path='/customrom' component={CustomROM} />
          <Route path='/stockrom' component={Stockrom} />
          <Route path='/others' component={Others} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
