import React from 'react';
import Header from './components/Header';
import {Home} from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
   <React.Fragment>
     <BrowserRouter>
     <Header />
     <Switch>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/contact">
       <Contact />
     </Route>
     <Route path="/">
       <Home />
     </Route>
  </Switch>
     </BrowserRouter>
    
   </React.Fragment>
  )
}

export default App;
