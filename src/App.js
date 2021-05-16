import React,{useState} from 'react';
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

  const [cartCount,setCartCount] = useState(0)

  //create state to store cart items
  const [cartDetail,setCartDetail] = useState([])

  function addToCart(data)
  {
    setCartCount(cartCount+data.ItemAdded)
    setCartDetail(data)
    //console.warn(cartDetail)

  }


  return (
   <React.Fragment>
     <BrowserRouter>
     <Header cartCount={cartCount} addToCart={addToCart} />
     <Switch>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/product">
       <Product addToCart={addToCart}/>
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
