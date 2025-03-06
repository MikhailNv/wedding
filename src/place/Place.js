import '../index.css';
import './Place.css';
import logo1 from './images/img1.jpg';
import logo2 from './images/img2.jpg';
import React from "react";

const Place = () => {
  return (
      <section className="card vanue-section middle-section">
        <h1 className="title">Location</h1>
        <div className="vanue-body-container">
            <div className="vanue-container-center vanue-container-image venue-place1">
                <img src={logo1} alt="Место проведения" />
            </div>
            <div className="vanue-container-text vanue-container-center venue-subtitle">
                <h2 className="subtitle white-text">ЗАГОРОДНАЯ ПЛОЩАДКА "ЗАБЕРЕГ"</h2>
            </div>
            <div className="text vanue-container-text vanue-container-center venue-text">
                <h2 className="subtitle white-text">Ленинградская область, 41К-313, 30</h2>
            </div>
            <div className="vanue-container-center vanue-container-image venue-place2">
                <img src={logo2} alt="Место проведения" />
            </div>
        </div>
      </section>
  );
};

export default Place;