import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Project from './components/Project'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [aboutmeSelected, setAboutmeSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(false);

  const [categories] = useState([
    {
      name: "portfolio",
      description:
        "Projects & Work",
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <Router>
      <div>
        <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        aboutmeSelected={aboutmeSelected}
        setAboutmeSelected={setAboutmeSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        ></Nav>
        <main>
          <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Project}/>
            <Route path="/contact" component={ContactForm}/>
            <Route path="/resume" component={Resume}/>
          </Switch>
        {/* {!contactSelected ? (
            <>
              
            </>
          ) : (
              <ContactForm></ContactForm>
            )} 
        {!portfolioSelected ? (
            <>
              
            </>
          ) : (
            <Project currentCategory={currentCategory}></Project>
            )}
        {!aboutmeSelected ? (
            <>
              
            </>
          ) : (
              <About></About>
            )}
        {!resumeSelected ? (
            <>
              
            </>
          ) : (
              <Resume></Resume>
            )} */}
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
