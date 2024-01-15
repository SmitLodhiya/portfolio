import React from 'react'
import "./work.css"


const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="workdesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experiecne to help business achieve their goals and create a strong online presence.</span>
        <div className="worksimg">
            <img src="portfolio-1.png" alt="" className="workimg" />
            <img src="portfolio-2.png" alt="" className="workimg" />
            <img src="portfolio-3.png" alt="" className="workimg" />
            <img src="portfolio-4.png" alt="" className="workimg" />
            <img src="portfolio-5.png" alt="" className="workimg" />
            <img src="portfolio-6.png" alt="" className="workimg" />
        </div>

        <button className="workbtn">
            See More

        </button>
    </section>
  )
}

export default Works
