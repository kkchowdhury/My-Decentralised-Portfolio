import React from 'react';
import { SlCalender } from 'react-icons/sl';
import './Experience.css';

const Experience = () => {
  return (
    <section className="exp-section">
      <h1 className="title">Experience & Education</h1>

      <div className="container">
        {/* Education */}
        <div className="education">
          <h1 className="edu-title">Education</h1>
          
            <div className="edu-card" >
              <p className="card-text1">
                <SlCalender className="icon" /> 2020-2024
              </p>
              <h3 className="card-text2">B.Tech in Electrical & Electronics Engineering</h3>
              <p className="card-text3">8.56 CGPA</p>
              <p className="card-text4">Birla Institute Of Technology Mesra</p>
            </div>

            <div className="edu-card" >
              <p className="card-text1">
                <SlCalender className="icon" /> 2020
              </p>
              <h3 className="card-text2">Class - 12 CBSE Board</h3>
              <p className="card-text3">Aggregate Percentage :- 95.4%</p>
              <p className="card-text4">Central Model School Barrackpore</p>
            </div>

            <div className="edu-card" >
              <p className="card-text1">
                <SlCalender className="icon" /> 2018
              </p>
              <h3 className="card-text2">Class - 10 CBSE Board</h3>
              <p className="card-text3">Aggregate Percentage :- 97%</p>
              <p className="card-text4">Army Public School Barrackpore</p>
            </div>
         
        </div>

        {/* Experience */}
        <div className="experience">
          <h1 className="exp-title">Experience</h1>

          <div className="exp-card">
            <p className="card-text1">
              <SlCalender className="icon" /> June 2023 - July 2023
            </p>
            <h3 className="card-text2">Intern at NITI AAYOG </h3>
            <p className="card-text3">My role was to contribute to the creation of an app for the Women Entrepreneurship Platform (WEP). WEP
              empowers Indian women entrepreneurs via a unified access portal, connecting and supporting them to fulfill
              their aspirations through partnerships and resources. I used Flutter for app development.
</p>
            {/* <p className="card-text4">NITI AAYOG</p> */}
          </div>

          <div className="exp-card">
            <p className="card-text1">
              <SlCalender className="icon" /> May 2023 - July 2023
            </p>
            <h3 className="card-text2">Intern at HEXFORK</h3>
            <p className="card-text3">My role was to contribute to the creation of the website for HEXFORK. I created various features and worked as a Front-End 
Developer. I identified and fixed many bugs from the existing codebase.I used React.JS for web development.
              
            </p>
            {/* <p className="card-text4">HEXFORK</p> */}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Experience;
