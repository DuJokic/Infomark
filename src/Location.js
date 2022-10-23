import React from 'react';
import './Location.css';

function Location() {

  return (
    <div className="location">
        <div className="location_container">
            <h2>WE'RE LOCATED HERE</h2>
            <iframe className="googlemaps" style={{ width: "600px" , height: "600px" }} title="googlemaps" src="https://maps.google.com/maps?q=Ulica%20Josipa%20Kukovi%C4%87a%208,%20Brdovec&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    </div>
    
  )
}

export default Location