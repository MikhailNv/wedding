import '../index.css'
import './Organization.css';
import logo1 from './images/image.jpg';
import React from "react";

const Organization = ({userInfo}) => {
    const getName = (userInfo) => {
        return userInfo["formDisplayName"];
    }
    
    return (
        <section className="card organization-section middle-section" id="organization-section">
            <h1 className="title">Organization</h1>
            <p className="text">Если ты хочешь подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей семьи!</p>
            <div className="organization-container-image">
                <img src={logo1} alt="Место проведения" />
            </div>
            <p className="text">Пожалуйста, заполни форму обратной связи до 01.07.25, нажав на кнопку ниже</p>
            <button
            className="organization-form"
            onClick={
                () => window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdP9yndhdsZkLn5eydxKJ6ykI-HCpTYErR_UZAriRHLgLnVAA/viewform?usp=pp_url&entry.2092238618=${getName(userInfo)}`)
            }>Перейти к форме</button>
        </section>
    );
};

export default Organization;
