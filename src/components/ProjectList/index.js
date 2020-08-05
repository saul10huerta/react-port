import React, { useState } from 'react';

function PhotoList({ category }) {

    const [photos] = useState([
        {
          name: 'UpDog',
          category: 'projects',
          weblink: 'https://gentle-badlands-57330.herokuapp.com/',
          githubrepo: 'https://github.com/saul10huerta/UpDog',
          date: 'July 2020'
        },
        {
          name: 'Tasty Events',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/tasty-events/',
          githubrepo: 'https://github.com/saul10huerta/tasty-events',
          date: 'May 2020'
        },
        {
          name: 'Weather Dashboard',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/weather-dashboard/',
          githubrepo: 'https://github.com/saul10huerta/weather-dashboard',
          date: 'April 2020'
        },
        {
          name: 'Git It Done',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/git-it-done/',
          githubrepo: 'https://github.com/saul10huerta/git-it-done',
          date: 'April 2020'
        },
        {
          name: 'Work Day Scheduler',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/workday-scheduler/',
          githubrepo: 'https://github.com/saul10huerta/workday-scheduler',
          date: 'April 2020'
        },
        {
          name: 'Taskmaster Pro',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/taskmaster-pro/',
          githubrepo: 'https://github.com/saul10huerta/taskmaster-pro',
          date: 'April 2020'
        },
        {
          name: 'Coding Quiz',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/coding-quiz/',
          githubrepo: 'https://github.com/saul10huerta/coding-quiz',
          date: 'April 2020'
        },
        {
          name: 'Taskinator',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/taskinator/',
          githubrepo: 'https://github.com/saul10huerta/taskinator',
          date: 'April 2020'
        },
        {
          name: 'Password Generator',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/password-generator/',
          githubrepo: 'https://github.com/saul10huerta/password-generator',
          date: 'April 2020'
        },
        {
          name: 'Robot Gladiators',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/robot-gladiators/',
          githubrepo: 'https://github.com/saul10huerta/robot-gladiators',
          date: 'April 2020'
        },
        {
          name: 'Run Buddy',
          category: 'projects',
          weblink: 'https://saul10huerta.github.io/run-buddy/',
          githubrepo: 'https://github.com/saul10huerta/run-buddy',
          date: 'April 2020'
        }
      ]);

  return (
    <div>
        <div className="flex-row">
        {photos.map((image, i) => (
            <div className="card mx-3 my-5" key={image.name}>
                <p className="my-2">{image.name}</p>
                <img
                    src={require(`../../assets/${category}/${i}.png`)}
                    alt={image.name}
                    className="img-thumbnail"
                    style={{width: "100%"}}
                />
                <div className="my-2">
                <button type="button" className="mx-1 my-1"><a target="_blank" rel="noopener noreferrer" href={image.weblink}>Website Link</a></button>
                <button type="button" className="mx-1"><a target="_blank" rel="noopener noreferrer" href={image.githubrepo}>GitHub Repo</a></button>
                </div>
                <p>{image.date}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoList;