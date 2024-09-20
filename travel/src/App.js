import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <div className="background"></div>
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Redirect to='/Home' />
      </Switch>
    </div>
  );
};

export default App;
