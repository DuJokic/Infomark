import React from 'react';
import './LeftSidebar.css';

function LeftSideBar() {
  return (
    <div className="leftSidebar">
        <h2>WORKING HOURS</h2>
        <div className="workingHours">
            <div className="workingHours_Monday"><p>Monday</p><p>08:00 - 17:00</p></div>
            <div className="workingHours_Tuesday"><p>Tuesday</p><p>08:00 - 17:00</p></div>
            <div className="workingHours_Wednesday"><p>Wednesday</p><p>08:00 - 17:00</p></div>
            <div className="workingHours_Thirsday"><p>Thirsday</p><p>08:00 - 17:00</p></div>
            <div className="workingHours_Friday"><p>Friday</p><p>08:00 - 17:00</p></div>
            <div className="workingHours_Saturday"><p>Saturday</p><p>09:00 - 13:00</p></div>
        </div>
        <hr />
        <h2>CONTACT</h2>
        <div className="contact">
            <div className="email"><p>E-mail:</p><p>kontakt@infomark.hr</p></div>
            <div className="phone"><p>Phone:</p><p>0955679337</p></div>
        </div>
    </div>
  )
}

export default LeftSideBar