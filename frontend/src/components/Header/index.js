import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="page-header">
            <div className="header-content">
                <div className="logo">
                    <h1>AniRent</h1>
                </div>
                <input type="checkbox" id="hamburger-checkbox" />
                <label htmlFor="hamburger-checkbox" className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                </label>
                <nav>
                <ul>
                    <li><a href="#">Homepage</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Prices</a></li>
                </ul>
                </nav>
                <div className="page-shader"></div>
            </div>
        </header>
    )
}