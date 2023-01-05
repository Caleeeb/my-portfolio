import React from 'react';

function Nav(props) {
  const {
    setCurrentPage
  } = props;


  return (
    <header className="">
      <h2>
        <a data-testid="link" href="/">
        </a>
      </h2>
      <nav>
        <ul className="">
          <li className="mx-2 btn">
            <a data-testid="about" href="#about" onClick={() => setCurrentPage('About')}>
              About me
            </a>
          </li>
          <li className="mx-2 btn">
            <a data-testid="projects" href="#project" onClick={() => setCurrentPage('Project')}>
              Projects
            </a>
          </li>
          <li className="mx-2 btn">
            <a data-testid="contact" href="#contact" onClick={() => setCurrentPage('Contact')}>
              Contact Me
            </a>
          </li>
          <li className="mx-2 btn">
            <a data-testid="portfolio" href="https://caleeeb.github.io/module2-portfolio/assets/Resume%202021.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li className="mx-5L btn">
            <div className="email">day.caleb@gmail.com</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;