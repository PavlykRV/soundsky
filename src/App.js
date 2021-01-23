import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Header from './shared/Header'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Artists} />
        <Route path='/:id' component={Artist} />
      </Switch>
    </div>
  );
}

export default App;
