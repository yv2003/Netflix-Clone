import React from 'react';
import netflix from "./assets/netflix.png";
import avatar from "./assets/avatar.png";
import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
          <img className="nav__logo" src={netflix} alt="netflix-logo" />
          <img className="nav__avatar" src={avatar} alt="avatar"/>
          
    </div>
  )
}

export default Nav
