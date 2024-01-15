import React from 'react'
import "./skills.css"

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle"> What I Do </span>
        <span className="skillsDesc">I am a Skilled and passionate full stack Web Developer with experiecne in creating a visually and user friendly websites. I am proficient in HTML, CSS and JavaScript and also have knowledge about ReactJs </span>
        <div className="skillsbars">
            <div className="skillbar">
                <img src="ui-design.png" alt="ui/ux" className="skillbarImg" />
                <div className="skillbartext">
                    <h2>UI/UX Design</h2>
                    <p>Have some basic knowledge of Ui/Ux Designing</p>
                </div>
            
            </div>
            <div className="skillbar">
                <img src="website-design.png" alt="website" className="skillbarImg" />
                <div className="skillbartext">
                    <h2>Website Design</h2>
                    <p>Full Stack Developer</p>
                </div>
            
            </div>
            <div className="skillbar">
                <img src="app-design.png" alt="app " className="skillbarImg" />
                <div className="skillbartext">
                    <h2>App Design</h2>
                    <p>Master in App Designing</p>
                </div>
            
            </div>
        </div>
    </section>
  )
}

export default Skills
