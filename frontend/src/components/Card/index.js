import { React, createRef } from "react";
import "./Card.css";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineCheck } from "react-icons/hi"
import { BiX } from "react-icons/bi"

export default function Card(props) {
    const clickedRef = createRef();

    const clickBuyButton = () => {
        clickedRef.current.classList.add("clicked")
    }

    const clickRemoveButton = () => {
        clickedRef.current.classList.remove("clicked")
    }

    // let cover = `/frontend/public/assets/images/${props.cover}`
    let cover = "url(https://4.bp.blogspot.com/-TplrMd_gG_g/WInTSD0FfpI/AAAAAAAAGlk/wdIC-QR2_NUW8QMB2e8Qnfb_offaY3gggCLcB/s1600/kImY2Ve.jpg) no-repeat center center"
    let title = `${props.title}`
    let genres = `${props.genres}`
    let duration = `${props.duration}`
    let rating = `${props.rating}`
    let synopsis = `${props.synopsis}`

    return (
        <div className="wrapper">
            <div className="cardContainer">
                <div className="top" style={{ background: cover }}></div>
                <div className="bottom" ref={ clickedRef }>
                    <div className="left">
                        <div className="details">
                            <h1>{ title }</h1>
                            <p>{ genres }</p>
                        </div>
                        <div className="buy" onClick={ clickBuyButton }><i><BsCartPlus/></i></div>
                    </div>
                    <div className="right">
                        <div className="done"><i><HiOutlineCheck/></i></div>
                        <div className="details">
                            <h1>{ title }</h1>
                            <p>Added to your cart</p>
                        </div>
                        <div className="remove" onClick={ clickRemoveButton }><i><BiX/></i></div>
                    </div>
                </div>
            </div>
            <div className="inside">
                <div className="icon"><i><AiOutlineInfoCircle/></i></div>
                <div className="contents">
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