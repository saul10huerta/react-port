import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Project from './components/Project'
import ContactForm from './components/Contact'
import Resume from './components/Resume'

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
      {!contactSelected ? (
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
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
