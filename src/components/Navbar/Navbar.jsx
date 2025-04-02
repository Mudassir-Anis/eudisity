import React, { use, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
      
    });
  }, []);

  const toggleMenu = () => {
    setVisible(!visible);
  }

  return (
    <nav className={"container " + (sticky? "dark-nav" : "")}>
    {/* <nav className={["container", sticky? "dark-nav" : ""].join(' ')}> */}
      <img src={logo} alt="" className="logo" />
      <ul className={visible ? "display-menu-mobile" : ""}>
        <li><Link to='hero' smooth={true} offset={-260}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260}>Testimonials</Link></li>
        <li>
          <Link to="contact" className="btn" offset={-260} smooth={true}>Contact us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
