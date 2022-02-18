import React from "react";
import "./Footer.css";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <footer className="pageFooter">
            <div className="footerContent">
                <h1 className="footerLogo">AniRent</h1>
                <div className="socialMedia">
                    <i><FaGithub/></i>
                    <i><FaTwitter/></i>
                    <i><FaInstagram/></i>
                    <i><FaLinkedin/></i>
                </div>
            </div>
        </footer>
    )
}