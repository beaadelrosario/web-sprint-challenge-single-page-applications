import React from 'react';
// import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'
import Pizza from './components/Pizza'

const App = () => {

  return (
    <div className='App'>

    <Switch>
    <Route path='/pizza'>
        <Pizza />
      </Route>

    <Route path='/form'>
        <Form />
      </Route>

      <Route path='/'>
        <Home />
      </Route>
    </Switch>

  </div>
  );
};
export default App;
