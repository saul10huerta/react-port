import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        setPortfolioSelected,
        aboutmeSelected,
        setAboutmeSelected,
        resumeSelected,
        setResumeSelected
      } = props;

      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);
  return (
    <header className="flex-row">
        <h2 className="mx-3 my-2">
            <a href="/"> Saul Huerta </a>
        </h2>
        <nav>
            <ul className="flex-row my-8">
                <li className={`mx-2 ${aboutmeSelected && 'navActive'}`}>
                    <span data-testid="about" onClick={() => {setContactSelected(false); 
                        setAboutmeSelected(true);
                        setPortfolioSelected(false);
                        setResumeSelected(false);
                        }}>
                    About me
                    </span>
                </li>
                {categories.map((category) => (
                    <li
                    className={`mx-2 ${
                        currentCategory.name === category.name && !aboutmeSelected && !contactSelected && !resumeSelected && `navActive`
                        }`} key={category.name}>
                    <span onClick={() => {setCurrentCategory(category); 
                        setContactSelected(false);
                        setAboutmeSelected(false);
                        setPortfolioSelected(true);
                        setResumeSelected(false);
                        }} >
                        {capitalizeFirstLetter(category.name)}
                    </span>
                    </li>
                ))}
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => {setContactSelected(true); setAboutmeSelected(false); setPortfolioSelected(false); setResumeSelected(false);}}>Contact</span>
                </li>
                <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                    <span onClick={() => {setContactSelected(false); setAboutmeSelected(false); setPortfolioSelected(false); setResumeSelected(true);}}>Resume</span>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;