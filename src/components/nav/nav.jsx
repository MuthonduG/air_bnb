import React from 'react';
import './nav.scss';
import Logo from "../../assets/bnb_logo.png";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

export default function Nav() {
  const hyperlinks = [
    { href: "/home", text: "Stays" },
    { href: "/about", text: "Experiences" },
    { href: "/contact", text: "Online Experiences" },
    { href: "/contact", text: "Airbnb your home" },

  ];

  return (
    <nav className='nav'>
      <div className="nav__logo">
        <a to="">
          <img className='nav__logo-png' src={Logo} alt="airbnb" />
        </a>
        <span><b>airbnb</b></span>
      </div>

      <div className="nav__hyperlinks">
        {
          hyperlinks && hyperlinks.map((link, index) => {
            return (
              <a className='nav__link' href={link.href} key={link.href}>
                {link.text}
              </a>
            )
          })
        }
      </div>

      <div className="nav__location">
        <a href="#">
          <HiOutlineGlobeAlt />
        </a>
      </div>

      <div className="nav__button">
        <button className='nav__button-btn'>
          <IoMdMenu/>
          <FaCircleUser />
        </button>
      </div>

    </nav>
  );
}
