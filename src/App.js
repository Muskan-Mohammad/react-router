import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter , Link ,Switch , Route  } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Countries from './mini-apps/countries/Countries'
import Cats from './mini-apps/cats/Cats'
import Users from './mini-apps/users/Users'

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
  <header className='bg-dark text-white p-3'>
  <ul className='list-inline d-flex justify-content-center gap-4  my-2 p-0'>
      <li><Link to = "/home">Home</Link></li>
      <li><Link to = "/about">About</Link></li>
      <li><Link to = "/services">Services</Link></li>
      <li><Link to = "/contact">Contact</Link></li>
      <li> <Link to="/countries">Countries</Link> </li>  
      <li> <Link to="/cats">Cats</Link> </li> 
      <li> <Link to="/users">Users</Link> </li>
      

            
    </ul>
  </header>

  <section className='container py-5'>
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

      <Route path ='/countries'>
      <Countries />
      </Route>

       <Route path ='/cats'>
      <Cats />
      </Route>

       <Route path ='/users'>
      <Users />
      </Route>  

      

    </Switch>
  </section>
    </div>
    </BrowserRouter>
    );
    
  
}

export default App;
