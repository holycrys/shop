import React from 'react';
import './App.css';
import Clienti from './components/clienti';
import Navbar from './components/navbar';
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Femei from './components/femei';
import Barbati from './components/barbati';
import Copii from './components/copii';



function App() {
  
  return ( 
    <Router>
      <Navbar/>
      <div>
        <Clienti/>
          <Switch>
            <Route path='/femei'><Femei/></Route>
          </Switch>
      </div>  
    </Router>     
  );   
  }

export default App;
