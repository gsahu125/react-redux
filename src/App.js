import React,{useState} from 'react';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Login} from './components/Login';
import {Signup} from './components/Signup';

//import Header from './components/Header';
import HeaderContainer from './containers/HeaderContainer';

// import Product from './components/Product';
import ProductContainer from './containers/ProductContainer';

import ProductDetail from './components/ProductDetail';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {

  //const [cartCount,setCartCount] = useState(0)

  // function addToCartFunc(data)
  // {
  //   setCartCount(cartCount + data.qty)
  // }


  return (
   <React.Fragment>
     <BrowserRouter>
     <HeaderContainer />
     {/* <Header/> */}
     <Switch>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/product">
       <ProductContainer/>
       {/* <Product addToCartFunc={addToCartFunc}/> */}
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
       <Home />
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
