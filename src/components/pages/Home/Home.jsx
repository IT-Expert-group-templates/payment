import React from 'react';
import Transfer from '../transfer/Transfer'
import About2 from '../About/About2'
import About1 from '../About/About1'
import Payment from '../payment'

function Home() {
  return (
    <div>
      <Transfer/>
      <About2/>
      <Payment/>
      <About1/>
    </div>
  );
}

export default Home;