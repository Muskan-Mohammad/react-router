import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter , Link ,Switch , Route  } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
  <header className='bg-dark text-white p-3'>
    <ul className='list-inline d-flex justify-content-center gap-4 m-0 p-0'>
      <li><Link to = "/">Home</Link></li>
      <li><Link to = "/about">About</Link></li>
      <li><Link to = "/services">Services</Link></li>
      <li><Link to = "/contact">Contact</Link></li>
    </ul>
  </header>

  <section className='container p-4'>
    <Switch>
      <Route path ='/home'>
      <Home />
      </Route>

      <Route path ='/about'>
      <About />
      </Route>

      <Route path ='/services'>
      <Services />
      </Route>

      <Route path ='/contact'>
      <Contact />
      </Route>

      

    </Switch>
  </section>
    </div>
    </BrowserRouter>
    );
    
  
}

export default App;
