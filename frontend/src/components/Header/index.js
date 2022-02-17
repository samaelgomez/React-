import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="pageHeader">
            <div className="headerContent">
                <div className="headerLogo">
                    <h1>AniRent</h1>
                </div>
                <input type="checkbox" id="hamburgerCheckbox" />
                <label htmlFor="hamburgerCheckbox" className="hamburger">
                    <div className="hamburgerLine"></div>
                    <div className="hamburgerLine"></div>
                    <div className="hamburgerLine"></div>
                </label>
                <nav>
                    <ul>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Prices</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}