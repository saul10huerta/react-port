import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description:
        "Projects & Work",
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <Project currentCategory={currentCategory}></Project>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
