import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Project></Project>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
