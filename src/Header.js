import React from 'react';
import Navbar from './Navbar';
import HomeIcon from '@material-ui/icons/Home';
import InfoButton from '@material-ui/icons/Info';
import GamesButton from '@material-ui/icons/Casino';
import {Link} from 'react-router-dom';
import './Header.css';

function Header({selected}) {
  return (
    <div className="header">
        <img className="header_logo" src={ require('./images/logo.png')} alt="" />
        <div className="header_buttons">
            <Link to="/" className="link">
              <Navbar Icon={HomeIcon} title="home" />
            </Link>
            <Link to="/about" className="link">
              <Navbar Icon={InfoButton} title="about us" />
            </Link>
            <Link to="/games" className="link">
              <Navbar Icon={GamesButton} title="games" />
            </Link>            
        </div>
    </div>
  )
}

export default Header