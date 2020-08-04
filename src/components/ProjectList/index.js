import React, { useState } from 'react';

function PhotoList({ category }) {

    const [photos] = useState([
        {
          name: 'Run Buddy',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/run-buddy/',
          githubrepo: 'https://github.com/saul10huerta/run-buddy',
          date: 'March 2020'
        },
        {
          name: 'Robot Gladiators',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/robot-gladiators/',
          githubrepo: 'https://github.com/saul10huerta/robot-gladiators',
          date: 'April 2020'
        }
      ]);

  return (
    <div>
        <div className="flex-row">
        {photos.map((image, i) => (
            <div className="card mx-3 my-5">
                <p className="my-2">{image.name}</p>
                <img
                    src={require(`../../assets/${category}/${i}.png`)}
                    alt={image.name}
                    className="img-thumbnail mx-3"
                    key={image.name}
                    style={{width: "100%"}}
                />
            </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoList;