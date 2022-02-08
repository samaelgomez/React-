import React from "react";
import "./Card.css";

export default function Card(props) {
    

    // let cover = `http://localhost:3000/frontend/public/assets/images/${props.cover}`
    let cover = 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/51b03e94ad08460f918b7b5202ee80749959f6a446b7c738931e18e95139f2d5._RI_V_TTW_.jpg'
    let title = `${props.title}`

    return (
        <div class="wrapper">
            <div class="cardContainer">
                <div class="top"></div>
                <div class="bottom">
                <div class="left">
                    <div class="details">
                        <h1>Chair</h1>
                        <p>£250</p>
                    </div>
                    <div class="buy"><i class="material-icons"></i></div>
                </div>
                <div class="right">
                    <div class="done"><i class="material-icons">done</i></div>
                    <div class="details">
                    <h1>Chair</h1>
                    <p>Added to your cart</p>
                    </div>
                    <div class="remove"><i class="material-icons">clear</i></div>
                </div>
                </div>
            </div>
            <div class="inside">
                <div class="icon"><i class="material-icons">info_outline</i></div>
                <div class="contents">
                <table>
                    <tr>
                    <th>Width</th>
                    <th>Height</th>
                    </tr>
                    <tr>
                    <td>3000mm</td>
                    <td>4000mm</td>
                    </tr>
                    <tr>
                    <th>Something</th>
                    <th>Something</th>
                    </tr>
                    <tr>
                    <td>200mm</td>
                    <td>200mm</td>
                    </tr>
                    <tr>
                    <th>Something</th>
                    <th>Something</th>
                    </tr>
                    <tr>
                    <td>200mm</td>
                    <td>200mm</td>
                    </tr>
                    <tr>
                    <th>Something</th>
                    <th>Something</th>
                    </tr>
                    <tr>
                    <td>200mm</td>
                    <td>200mm</td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    )
}   