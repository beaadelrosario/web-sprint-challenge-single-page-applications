import React from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'
import Pizza from './components/Pizza'

const App = () => {

  return (
    <div className='App'>
      <nav>
        <div>
          <h1 className='store-header'>Lambda Eats</h1>
        </div>
        <div className='nav-links'>
          <Link to='/form'>Build Your Own</Link>
        </div>
      </nav>

    <Route exact path='/'>
        <Home />
      </Route>

    <Route path='/pizza'>
        <Pizza />
      </Route>

    <Route path='/form'>
        <Form />
      </Route>

  </div>
  );
};
export default App;
