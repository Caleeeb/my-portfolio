import React, { useState } from 'react';

function Project() {
    const [projects] = useState([
        {
            name: 'Glassfiller',
            description: 'This is an application that houses cocktail recipes. Make, save, and find new concoctions. Deployed with Heroku andade with Node.js, SQL, Express.js, and Handlebars.js.',
            link: 'https://glassfiller.herokuapp.com/',
            photo: 'glassfiller.png'
        },
        {
            name: 'Glassfiller 2.0',
            description: 'This is an application that houses cocktail recipes. Make, save, and find new concoctions. Made with Node.js, Mongodb, React, and GraphQL.',
            link: '',
            photo: 'glassfiller2.png'
        },
        {
            name: 'Gifcast',
            description: 'An application that presents the current weather of a certain location and also a gif from giphy using the description of the weather.',
            link: 'https://cardenas1850.github.io/project-1/',
            photo: 'gifcast.png'
        },
        {
            name: 'Work Day Scheduler',
            description: 'An application that can be used to plan out your day. Save your tasks locally using local storage. Each time slot is color coardianted based on the current time.',
            link: 'https://caleeeb.github.io/work-day-scheduler/',
            photo: 'work-day-scheduler.png'
        },
        {
            name: 'Note Taker',
            description: 'An application that stores notes for you. App is made with Node.js and Express.js, deployed with Heroku.',
            link: 'https://notetaker1234567.herokuapp.com/',
            photo: 'note-taker.png'
        },
        {
            name: 'Run Buddy',
            description: "A mock up of a fitness program's website.",
            link: 'https://caleeeb.github.io/run-buddy/',
            photo: 'run-buddy.jpeg'
        },
    ]);

    return (

        <div className='container jobs'>
            {projects.map((project, i) => (
                <a className='project-link' href={project.link} target="_blank" rel="noopener noreferrer" key={i}>

                    <div className="mx-1 my-1 project">
                        <div className='capition'>
                            <h3 className='px-2'>{project.name}</h3>
                            <p className='px-2'>{project.description}</p>
                            <img
                                src={require(`../../images/${project.photo}`)}
                                alt={project.name}
                                className="mx-1 px-2 py-2"
                                // onClick={window.open(project.link)}
                                key={project.name}
                            />
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Project;