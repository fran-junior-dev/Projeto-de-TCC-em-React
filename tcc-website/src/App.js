import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/ServicesPage/Services'
import Products from './components/pages/ProductsPage/Products'
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Services' component={Services}/>
        <Route path='/Products' component={Products}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
