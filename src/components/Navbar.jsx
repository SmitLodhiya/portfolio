import React, { useState } from 'react'
import  './navbar.css'
import { Link } from 'react-scroll'



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <img src="logo.png" alt='logo' className="logo"></img>
      <div className="desktopmenu" >
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulist">Home</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist">About</Link>

        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500}className="desktopmenulist">Portfolio</Link>

        <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist">Clients</Link>




      </div>
      <button className='desktopMenuButton' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src="contact.png" alt="" className="desktopmenuimage" />Contact Me
      </button>

      <img src="menu.png" alt='Menu' className="mobMenu" onClick={()=>setShowMenu(!showMenu)}></img>
      <div className="navmenu" style={{display: showMenu? 'flex' :'none'}} >
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem"  onClick={()=>setShowMenu(false)}>About</Link>

        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500}className="listItem"  onClick={()=>setShowMenu(false)}>Portfolio</Link>

        <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>


     
    </div>
  )
}

export default Navbar
