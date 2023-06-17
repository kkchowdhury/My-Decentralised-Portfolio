import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import js from "../../assets/skills/js.jpeg";
import flutter from "../../assets/skills/flutter.jpeg";
import cpp from "../../assets/skills/cpp.jpeg";
import python from "../../assets/skills/python.jpeg";
import solidity from "../../assets/skills/solidity.jpeg";
import excel from "../../assets/skills/excel.jpeg";

const Skills = () => {
  return (
    <section className="skills-section">

        <img src={react} alt="react-icon" />
        <img src={html} alt="html-icon" />
        <img src={css} alt="css-icon" />
        <img src={js} alt="js-icon" />
        <img src={flutter} alt="flutter-icon" />
        <img src={cpp} alt="cpp-icon" />
        <img src={python} alt="python-icon" />
        <img src={solidity} alt="solidity-icon" />
        <img src={excel} alt="excel-icon" />
    </section>
  )
}

export default Skills
