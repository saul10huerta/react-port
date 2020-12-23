import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="flex-row">
        <h2 className="mx-3 my-2">
            <Link to='/'>
                <a>Saul Huerta</a>
            </Link>
        </h2>
        <nav>
            <ul className="flex-row my-8">
                <Link to='/about'>
                    <li><span>About Me</span></li>
                </Link>
                <Link to='/portafolio'>
                    <li><span>Portafolio</span></li>
                </Link>
                <Link to='/contact'>
                    <li><span>Contact</span></li>
                </Link>
                <Link to='/resume'>
                    <li><span>Resume</span></li>
                </Link>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;