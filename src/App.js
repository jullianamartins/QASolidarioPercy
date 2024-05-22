import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import InfoScreen from './InfoScreen';
import './App.css'; // Este arquivo será usado para os estilos

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/info" component={InfoScreen} />
      </Switch>
    </Router>
  );
};

export default App;