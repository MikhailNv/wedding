import '../index.css';
import './Nav.css';
import logout from "./images/logout.svg";
import wedding_card from "./images/wedding_couple.svg"
import Cookies from 'universal-cookie';
import React, { useState, useEffect } from "react";

const Nav = ({navigate}) => {
    const [titleChange, setTitleChange] = useState(document.documentElement.clientWidth < 500);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const side = document.documentElement.clientWidth < 500;
            if (side !== titleChange) setTitleChange(side);
        }, false);
    }, [titleChange]);

    const handleClick = () => {
        const cookies = new Cookies(null, { path: '/' });
        cookies.remove("user");
        cookies.remove("hash");
        navigate('/');
    }

    function onLinkClick(event){
        event.preventDefault();
        document.getElementById('timer').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <section className="card nav-section first-section">
            {/* {
                !titleChange
                ? <h1 className="title">Wedding Invitation</h1>
                : <div className="card-img"><img src={wedding_card} alt="wedding-card-logo"></img></div>
            } */}
            <div className="card-img" onClick={onLinkClick}>
                <img src={wedding_card} alt="wedding-card-logo"></img>
            </div>
            <div className="logout-img">
                <img src={logout} alt="logout-logo" onClick={handleClick}></img>
            </div>
        </section>
    );
};

export default Nav;
