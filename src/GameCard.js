import React from 'react';
import Button from '@material-ui/core/Button';
import "./GameCard.css";

function GameCard({ image, title, description, released, price, discount, console }) {
  return (
    <div className="gameCard">
        <div className="gameCard_header">
            <img className="gameCard_image" src={image} alt="" />
            <div className="gameCard_headerRight">
                <span className="released">
                    <h4>Release date: {released}</h4>
                </span>
                <span className="price">
                    <h1>{price}</h1><h3>{discount}</h3>
                </span>
                <Button variant="contained" color="success" className="gameCard_button">
                    Add to cart
                </Button>
                <img className="gameCard_console" src={console} alt="" />
            </div>
        </div>
        <hr className="divider" />
        <div className="gameCard_title"><h2>{title}</h2></div>
        <div className="gameCard_description">{description}</div>
    </div>
  )
}

export default GameCard