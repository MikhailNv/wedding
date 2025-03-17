import '../index.css';
import './Nav.css';
import wedding_card from "./images/wedding_couple.svg"
import close_logo from "./images/close.svg"
import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavMini = ({ handleMenuClick }) => {
    return (
        <div className="nav-section-mini-container">
            <div className="nav-img">
                <img src={wedding_card} alt="nav-logo" onClick={handleMenuClick}></img>
            </div>
        </div>
    )
}

const NavMax = ({ handleMenuClick }) => {
    const handleNavLinkClick = () => {
        handleMenuClick();
    }

    // TODO: logout
    // const handleClick = () => {
    //     const cookies = new Cookies(null, { path: '/' });
    //     cookies.remove("user");
    //     cookies.remove("hash");
    //     navigate('/');
    // }

    return (
        <div className="nav-section-max-container">
            <div className="menu-item-container">
                <div className="card-img">
                    <img src={wedding_card} alt="card-logo"></img>
                </div>
                <div className="menu-item">
                    <Link
                    to={{ pathname: "/invitation", hash: "#invitation-section" }}
                    onClick={handleNavLinkClick}>
                        Invitation
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    to={{ pathname: "/invitation", hash: "#vanue-section" }}
                    onClick={handleNavLinkClick}>
                        Location
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    to={{ pathname: "/invitation", hash: "#dress-code-section" }}
                    onClick={handleNavLinkClick}>
                        Dress Code
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    to={{ pathname: "/invitation", hash: "#program-section" }}
                    onClick={handleNavLinkClick}>
                        Program
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    to={{ pathname: "/invitation", hash: "#organization-section" }}
                    onClick={handleNavLinkClick}>
                        Organization
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    to={{ pathname: "/invitation", hash: "#timer" }}
                    onClick={handleNavLinkClick}>
                        Time left
                    </Link>
                </div>
            </div>
            <div
            className="menu-close"
            onClick={handleMenuClick}
            >
                <img src={close_logo} alt="close_logo"></img>
            </div>
        </div>
    )
}

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuClick = () => {
        if (!menuOpen === false) { document.body.style.overflow = "scroll"; }
        else { document.body.style.overflow = "hidden"; }
        setMenuOpen(!menuOpen);
    }

    return (
        <section
        className={`card ${menuOpen ? "nav-section-max" : "nav-section-mini"} first-section`}
        >
            { 
                menuOpen
                ? <NavMax handleMenuClick={handleMenuClick} />
                : <NavMini handleMenuClick={handleMenuClick} />
            }
        </section>
    )
};

export default Nav;
