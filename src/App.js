import React from 'react';
import Header from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {

  let data = [
    {name:'gajendra',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'web developer'},
    {name:'gajendra1',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'web designer'},
    {name:'gajendra2',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'full stack developer'}
  ];
  return (
   <React.Fragment>
     <BrowserRouter>
     <Header />
     <Switch>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/contact/:name">
       <Contact />
     </Route>
     <Route path="/login">
    <Login />
     </Route>
     <Route path="/signup">
       <Signup />
     </Route>
     <Route path="/">
       <Home data={data}/>
     </Route>
  </Switch>
  <Footer />
     </BrowserRouter>
   </React.Fragment>
  )
}

export default App;
