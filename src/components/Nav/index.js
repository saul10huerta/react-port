import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
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
                <li className="mx-2">
                    <a href="#about">
                    About me
                    </a>
                </li>
                <li className="mx-2">
                    <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li
                    className={`mx-2 ${
                        currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
                    <span onClick={() => {setCurrentCategory(category)}} >
                        {capitalizeFirstLetter(category.name)}
                    </span>
                    </li>
                ))}
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;