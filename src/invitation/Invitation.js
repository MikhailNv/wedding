import '../index.css'
import './Invitation.css';
import ACCOUNTS from '../accounts';
import logo from './images/img.jpeg';
import CryptoJS from 'crypto-js';
import React from "react";

const WeddingInvite = ({ user, id }) => {
  const generateSubtitle = (user) => {
    if (user != "") {
      const bytes_user_info = CryptoJS.AES.decrypt(ACCOUNTS[user], id);
      const user_info = JSON.parse(bytes_user_info.toString(CryptoJS.enc.Utf8));
      let subtitle = `${user_info["gender"] == "male" ? "ДОРОГОЙ" : "ДОРОГАЯ"} ${user_info["displayName"].toUpperCase()}!`;
      return subtitle;
    }
  }

  return (
    <section className="card invitation-section middle-section">
      <h1 className="title">Wedding<br />Invitation</h1>
      <div className="image-wrapper">
        <div className="image-border">
          <div className="image-border-inner">
            <img src={logo} alt="Молодожены" className="wedding-image" />
          </div>
        </div>
      </div>
      <h2 className="subtitle">{generateSubtitle(user)}</h2>
      <p className="text">Приглашаем тебя разделить с нами радость особенного дня - нашей свадьбы!</p>
      <div className="date-container-wrapper">
        <div className="date-container">29.07.2025</div>
      </div>
      <p className="text quote">“В этом мире ты всего лишь человек, но для кого-то ты – весь мир”</p>
    </section>
  );
};

export default WeddingInvite;
