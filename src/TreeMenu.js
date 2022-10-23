import React, {useState} from 'react';
import './TreeMenu.css';
import customData from './supersportJSON.json';

function TreeMenu() {
    const [brandState, setBrandState] = useState("");

    const handleClickOnBrand = (e) => {
        e.target.innerHTML === brandState ? setBrandState("") : setBrandState(e.target.innerHTML)
    }

  return (
    <div className="treeMenu-Container">
        <h1>Supersport games</h1>
        {
            customData.brands.map((brand) => {
                return (
                    <div className="dropdown-container">
                        <div className="dropdown-btn" onClick={handleClickOnBrand}>
                                <h2>{brand.name2}</h2>
                        </div>
                        <div className="dropdown">
                            <p className="msg">👈 Click on brand to browse games</p>                            
                            {customData.items.filter((item) => brand.name2 === item.brand)
                                .sort((a, b) => a.name > b.name ? 1 : -1)
                                .map((item) => (
                                <div className="dropdown-item">
                                    {brand.name2 === brandState ? (
                                        <p>{item.name}</p>
                                    ):("")}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TreeMenu

