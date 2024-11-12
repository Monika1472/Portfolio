import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <h3>Hi, I am Monika, a Software Developer</h3>

      <div className="buttons">
      <Link to={"/About Me"}> 
      <button className="btn hire-me">Hire Me</button>
      </Link>
        <button 
        className="btn download-resume" 
        onClick={() => window.open("https://drive.google.com/file/d/1LT-rwI_KWLHi_zc-E4D9NCxghCn6nsH7/view?usp=drive_link", "_blank", "noopener noreferrer")}
      >
        Download Resume
      </button>
      </div>


      <footer>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/monika-rajan-66b95521a/" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Monika1472" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.hackerrank.com/profile/monirajan1472" target="_blank" rel="noreferrer">
          <FaHackerrank size={30} />
        </a>
      </div>
        <p>&copy; 2024 Monika. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
