import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Transfer from '../pages/transfer/Transfer';
import Payment from '../pages/payment';
import Carousel from '../components/Carousel';
import Contact from '../pages/Contact';
import About1 from '../pages/About/About1';
import About from '../pages/About';

function Index() {
  return (
    <Switch>
      <Route exact path="/">
        <Carousel title="Home Page" />
        <Home />
      </Route>
      <Route path="/transfer">
        <Carousel title="Transfer" />
        <Transfer />
        <About1 />
      </Route>
      <Route path="/payment">
        <Carousel title="Payment" />
        <Payment />
      </Route>
      <Route path="/contact">
        <Carousel title="Contact" />
        <Contact />
        <About1 />
      </Route>
      <Route path="/about">
        <Carousel title="About" />
        <About />
      </Route>
    </Switch>
  );
}

export default Index;