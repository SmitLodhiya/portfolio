import React from 'react'
import "./intro.css"
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introname">Smit</span><br/>Website Developer</span>
        <p className="intropara">
          I am a skilled and passionate website Developer with experience in creating <br/>  visually appearing
         and user friendly-websites.
        </p>
        <Link><button className="btn"><img  className="btnImg" src="hireme.png" alt='hire'/>Hire Me</button></Link>
      </div>
      <img src="image.png" alt="profile" className="bg" />
    </section>
   
  )
}

export default Intro
