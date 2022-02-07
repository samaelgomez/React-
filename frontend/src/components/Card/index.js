import React from "react";
import "./Card.css";

export default function Card(props) {
    let newClassName = `color_bg red`
    // let cover = `http://localhost:3000/frontend/public/assets/images/${props.cover}`
    let cover = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/51b03e94ad08460f918b7b5202ee80749959f6a446b7c738931e18e95139f2d5._RI_V_TTW_.jpg'
    let title = `${props.title}`
    console.log(cover)
    let { old_price, newPrice, rupess, exp_date } = props
    return (
        <div className="card">
            <div className="wrapper">
                <div className={newClassName}></div>
                <img className="card_img" src={ cover }></img>
                <div className="heart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                        </path>
                    </svg>
                </div>
                <div className="cardInfo">
                    <h1>{title}</h1>
                    <p className="date_">{exp_date}</p>
                    <div className="action">
                        <div className="priceGroup">
                            <p className="price old_price">{rupess}{old_price}</p>
                            <p className="price newPrice">{rupess}{newPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}