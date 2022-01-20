import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Navbar from './components/components/Navbar';


function App() {
  return (
    <div className="App">
      dhfbhbksabdjkasdjk
      aljdjasndjnsaj
      <h1>knkalnsdklsdnlda</h1>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
