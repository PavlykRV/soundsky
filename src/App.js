import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import ArtistPage from './pages/Artist';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/:id' component={ArtistPage} />
      </Switch>
    </div>
  );
}

export default App;
