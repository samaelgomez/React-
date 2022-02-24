import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <header className="pageHeader">
            <div className="headerContent">
                <div className="headerLogo">
                    <a href="/"><h1>AniRent</h1></a>
                </div>
                <input type="checkbox" id="hamburgerCheckbox"/>
                <label htmlFor="hamburgerCheckbox" className="hamburger">
                    <div className="hamburgerLine"></div>
                    <div className="hamburgerLine"></div>
                    <div className="hamburgerLine"></div>
                </label>
                <nav>
                    <ul>
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}