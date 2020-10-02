import React from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Introduction from './components/Introduction/Introduction.js';
import CustomROM from './components/CustomROM/CustomROM.js'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <CustomROM />
    </div>
  );
}

export default App;
