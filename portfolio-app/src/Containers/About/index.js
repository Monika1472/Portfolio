import React from 'react'
import './index.css'

const About=()=> {
  return (
    <div className="about-container">
      <div className="about-box">
        <h3 >ABOUT ME</h3>
        <p>
        Hi, I'm Monika, a passionate software developer with one year of experience at <b>WiseTech Global</b>, 
        where I worked closely with customers to meet their requirements. During my time there, 
        I primarily focused on React.js for frontend development and Java for backend services.
        I had the opportunity to work on a variety of tasks, including building user-friendly interfaces, 
        implementing enhancements, and managing SQL queries efficiently. I also gained experience in 
        Kafka message handling and its integration into solutions. Additionally, I have written efficient 
        test cases, optimized application performance and collaborated with cross-functional teams to 
        deliver high-quality solutions.
        </p>

        <h4>PERSONAL INFORMATION</h4>
        <div className="personal-info">
          <div className="info-item">
            <strong>Name:</strong> Monika R
          </div>
          <div className="info-item">
            <strong>Age:</strong> 22
          </div>
          <div className="info-item">
            <strong>Address:</strong> Chennai,India
          </div>
          <div className="info-item">
            <strong>Email:</strong> monirajan1472@gmail.com
          </div>
          <div className="info-item">
            <strong>Contact No:</strong> +91-7358114702
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;