import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";

import PropertyFeatured from "./pages/features";
import Property from "./pages/properties";



import PropertyDetails from "./components/Properties/PropertyDetails";
import PropertyFDetails from "./components/Properties/PropertyFDetails";

//import Property from "./components/Property";


import { Helmet } from 'react-helmet';

   
function App() {
  return (
        <>
  <Router>
  <Nav />

  <Route exact path="/">
      <Hero />
      <PropertyFeatured />

  </Route>

  <Route path="/properties">
        <Property />  
  </Route>



  <Route
          path="/featured/:_id"
          children={<PropertyFDetails></PropertyFDetails>}
  ></Route>

 
  <Route path="/about" component={About} />
          
  <Route
          path="/property/:_id"
          children={<PropertyDetails></PropertyDetails>}
  ></Route> 

 

{/* <Footer /> */}


</Router>


<Helmet>



 

    <script src="/js/jquery-3.3.1.min.js"></script>
    <script src="/js/jquery-migrate-3.0.1.min.js"></script>
    <script src="/js/jquery-ui.js"></script>
    <script src="/js/popper.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/owl.carousel.min.js"></script>
    <script src="/js/mediaelement-and-player.min.js"></script>
    <script src="/js/jquery.stellar.min.js"></script>
    <script src="/js/jquery.countdown.min.js"></script>
    <script src="/js/jquery.magnific-popup.min.js"></script>
    <script src="/js/bootstrap-datepicker.min.js"></script>
    <script src="/js/aos.js"></script>
  
    <script src="js/main.js"></script>
</Helmet>

 </>

  );
}

export default App;

