import '../index.css';
import './Place.css';
import logo1 from './images/img1.png';
import logo2 from './images/img2.png';
import React from "react";

const Place = () => {
    const handleClick = (event) => {
        event.preventDefault();
        window.open('https://yandex.ru/maps/-/CHBoREMc', '_blank');
    }
    return (
        <section className="card vanue-section middle-section" id="vanue-section">
            <h1 className="title">Location</h1>
            <div className="vanue-body-container">
                <div className="vanue-container-center vanue-container-image venue-place1">
                    <img src={logo2} alt="Место проведения" />
                </div>
                <div className="vanue-container-text vanue-container-center venue-subtitle" onClick={handleClick}>
                    <a className="subtitle white-text">ЗАГОРОДНАЯ ПЛОЩАДКА "ЗАБЕРЕГ"</a>
                </div>
                <div className="text vanue-container-center venue-text">
                    <p className="white-text">До площадки можно добраться любым удобным способом. После банкета будет организован траснфер до ближайшей станции метро!</p>
                </div>
                <div className="vanue-container-center vanue-container-image venue-place2">
                    <img src={logo1} alt="Место проведения" />
                </div>
            </div>
        </section>
    );
};

export default Place;