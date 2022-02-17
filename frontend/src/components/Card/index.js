import { React, createRef } from "react";
import "./Card.css";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineCheck } from "react-icons/hi"
import { BiX } from "react-icons/bi"

export default function Card(props) {
    const clickedRef = createRef();

    const addToCartButton = () => {
        clickedRef.current.classList.add("clicked")
    }

    const removeFromCartButton = () => {
        clickedRef.current.classList.remove("clicked")
    }

    let cover = `url(/assets/images/${props.cover}) no-repeat center center`
    let title = `${props.title}`
    let genres = `${props.genres}`
    let duration = `${props.duration}`
    let rating = `${props.rating}`
    let synopsis = `${props.synopsis}`

    return (
        <div className="cardWrapper">
            <div className="cardMainContainer">
                <div className="cardImage" style={{ background: cover }}></div>
                <div className="cardFooter" ref={ clickedRef }>
                    <div className="cardInfo">
                        <div className="cardDetails">
                            <h1>{ title }</h1>
                            <p>{ genres }</p>
                        </div>
                        <div className="cardCart" onClick={ addToCartButton }><i><BsCartPlus/></i></div>
                    </div>
                    <div className="cardCartMessage">
                        <div className="cardCartMessageCheck"><i><HiOutlineCheck/></i></div>
                        <div className="cardDetails">
                            <h1>{ title }</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div className="cardRemove" onClick={ removeFromCartButton }><i><BiX/></i></div>
                    </div>
                </div>
            </div>
            <div className="cardSpecs">
                <div className="cardIcon"><i><AiOutlineInfoCircle/></i></div>
                <div className="cardSpecsContents">
                    <table>
                        <tbody>
                            <tr>
                                <th>Title</th>
                            </tr>
                            <tr>
                                <td>{ title }</td>
                            </tr>
                            <tr>
                                <th>Genres</th>
                            </tr>
                            <tr>
                                <td>{ genres }</td>
                            </tr>
                            <tr>
                                <th>Duration</th>
                            </tr>
                            <tr>
                                <td>{ duration }</td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                            </tr>
                            <tr>
                                <td>{ rating }</td>
                            </tr>
                            <tr>
                                <th>Synopsis</th>
                            </tr>
                            <tr>
                                <td>{ synopsis }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}   