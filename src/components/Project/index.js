import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/projects/1.png";

function Project(props) {
  
    const currentCategory = {
        name: "commercial",
        description:
          "Photos of grocery stores, food trucks, and other commercial projects",
      };

    return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div className="flex-row">
          <img src={photo} 
            alt="1st Project"
            className="img-thumbnail mx-1" />
      </div>
    </section>
  );
}
export default Project;