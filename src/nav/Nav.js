import '../index.css';
import './Nav.css';
import wedding_card from "./images/wedding_couple.svg"
import React, { useState } from "react";


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
                    <a className="subtitle" href="#vanue-section" onClick={handleNavLinkClick}>Location</a>
                </div>
                <div className="menu-item">
                    <a className="subtitle" href="#dress-code-section" onClick={handleNavLinkClick}>Dress Code</a>
                </div>
                <div className="menu-item">
                    <a className="subtitle" href="#program-section" onClick={handleNavLinkClick}>Program</a>
                </div>
                <div className="menu-item">
                    <a className="subtitle" href="#organization-section" onClick={handleNavLinkClick}>Organization</a>
                </div>
                <div className="menu-item">
                    <a className="subtitle" href="#timer" onClick={handleNavLinkClick}>Time left</a>
                </div>
            </div>
            <div className="menu-close" onClick={handleMenuClick}>
                <a className="subtitle">Close</a>
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
