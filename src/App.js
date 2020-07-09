import React from 'react';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter , Route , Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div >
     <Menu/>
     <Switch>
     <Route path = "/" exact component = {Home} />
     <Route path = "/about" component = {About} />
     <Route path = "/contact" component = {Contact} />
     </Switch>
    </div>    
    </BrowserRouter>
   
  );
}

export default App;
