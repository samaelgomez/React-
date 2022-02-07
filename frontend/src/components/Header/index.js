import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className=" w-100">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="main-nav-wrapper">
                <div className="headerContainer">
                <a className="navbar-brand" href="">AniRent</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main-nav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Jobs <span className="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}