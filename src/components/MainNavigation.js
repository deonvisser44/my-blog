import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../assets/logoblog.png";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";


function MainNavigation(props) {

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    props.copyMail();
  }

  const twitter = 'https://twitter.com/deonvee';
  const linkedin = 'https://www.linkedin.com/in/deonvisser11/';
  const email = 'deonvisser44@gmail.com';



  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" className={classes.logoImg}/>
      </div>
      <div className={classes.navbar}>
        <ul>
          <li className={classes.li}>
            <a href={twitter}><FaTwitter /></a>
          </li>
          <li className={classes.li}>
            <a href={linkedin}><FaLinkedin /></a>
          </li>
          <li className={classes.li}>
            <a onClick={copy}><FaEnvelope /></a>
          </li>
        </ul>
        </div>
     
    </header>
  );
}

export default MainNavigation;
