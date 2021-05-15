import React from 'react';
import Header from './components/Header';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {

  let data = [
    {name:'gajendra',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'web developer'},
    {name:'gajju',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'web designer'},
    {name:'Monty',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'full stack developer'},
    {name:'Mona',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'Mean stack developer'},
    {name:'Monet',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'Mern stack developer'}
  ];

  return (
   <React.Fragment>
     <BrowserRouter>
     <Header />
     <Switch>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/product">
       <Product />
     </Route>
     <Route path="/productdetail">
       <ProductDetail />
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
  <p id="back-top">
    <a href="#top">
    <span></span>Back to Top</a>
  </p>
  <Footer />
     </BrowserRouter>
     
  
   </React.Fragment>
  )
}

export default App;
