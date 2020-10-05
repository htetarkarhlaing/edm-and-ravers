import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Artists from './pages/Artists';
import Festivals from './pages/Festivals';
import Gernes from './pages/Gernes';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/festivals' exact component={Festivals} />
        <Route path='/artists' exact component={Artists} />
        <Route path='/gernes' exact component={Gernes} />
        <Route path='/aboutus' exact component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
