import React from 'react';
import Header from './components/Header';
import {Home} from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {


  let data = [
    {name:'gajendra',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'web developer'},
    {name:'gajendra1',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'web designer'},
    {name:'gajendra2',age:30,dob:'07-05-1991',maritalStatus:'married',designation:'full stack developer'}
  ];

  const data1 = {name:'monet',hoby:'watching tiktok',age:25}

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
       <Home data={data} monetData={data1} />
     </Route>
  </Switch>
     </BrowserRouter>
    
   </React.Fragment>
  )
}

export default App;
