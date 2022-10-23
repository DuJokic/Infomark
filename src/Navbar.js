import React from 'react';
import './Navbar.css';

function Navbar({title, Icon, selected}) {
  return (
    <div className={`navbar ${selected && "selected"}`}>
        <Icon className="navbar_icon"  />
        <h2 className="navbar_title">{title}</h2>
    </div>
  )
}

export default Navbar