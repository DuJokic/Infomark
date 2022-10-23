import React from 'react'
import Location from './Location';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import './AboutUs.css';

function AboutUsPage() {
  return (
    <div className="about">
        <LeftSidebar className="left" />
        <Location className="center" />
        <RightSidebar className="right" />
    </div>
  )
}

export default AboutUsPage