import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <main>
          <Switch>
            <Route path="/react-port" component={About}/>
            <Route path="/about" exact component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={ContactForm}/>
            <Route path="/resume" component={Resume}/>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
