import React from "react";
import "./Card.css";

export default function Card(props) {
    // let cover = `http://localhost:3000/frontend/public/assets/images/${props.cover}`
    let cover = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/51b03e94ad08460f918b7b5202ee80749959f6a446b7c738931e18e95139f2d5._RI_V_TTW_.jpg'
    let title = `${props.title}`

    return (
        <div className="cardContainer">
            <div className="card">
                <div className="wrapper">
                    <img className="card_img" src={ cover }></img>
                    <div className="cardInfo">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}