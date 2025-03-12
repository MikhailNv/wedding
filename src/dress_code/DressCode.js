import '../index.css'
import './DressCode.css';
import ACCOUNTS from '../accounts';
import ImageGallery from "react-image-gallery";
import CryptoJS from 'crypto-js';
import React from "react";
  

const DressCode = ({ user, id }) => {

  const getImages = (login, id) => {
    const images_male = [
      {original: "https://i.pinimg.com/736x/ad/2a/eb/ad2aeb683b95e7ab7365a638a7089524.jpg",},
      {original: "https://i.pinimg.com/736x/b5/e1/7c/b5e17c95268a7c4390e584dd7aff8db0.jpg",},
      {original: "https://i.pinimg.com/736x/a2/f2/f6/a2f2f6f645d885ec0eb4eaaa6f68517e.jpg",},
      {original: "https://i.pinimg.com/736x/cd/56/5b/cd565b7870e9013f7b279e8aae0a48fa.jpg",},
    ];
    const images_female = [
      {original: "https://i.pinimg.com/736x/1d/57/e0/1d57e0ce77fd5057c54626ccf44a57e7.jpg",},
      {original: "https://i.pinimg.com/736x/d6/b1/23/d6b123a32abb3916b3f838cf64029084.jpg",},
      {original: "https://i.pinimg.com/736x/b7/95/98/b79598e678cb73e86e0b0643ef8c0f3d.jpg",},
      {original: "https://i.pinimg.com/736x/f7/d4/c2/f7d4c20682aab562df585e37e398e176.jpg",},
    ];

    if (login != "" ) {
      const bytes_user_info = CryptoJS.AES.decrypt(ACCOUNTS[login], id);
      const user_info = JSON.parse(bytes_user_info.toString(CryptoJS.enc.Utf8));
      if (user_info["gender"] == "male") {return images_male}
      else {return images_female};
    }
    else { return []; }
  }

  const getTone = (login, id, className) => {
    if (login != "" ) {
      const bytes_user_info = CryptoJS.AES.decrypt(ACCOUNTS[login], id);
      const user_info = JSON.parse(bytes_user_info.toString(CryptoJS.enc.Utf8));
      if (user_info["gender"] == "male") {return `${className}-male`}
      else {return `${className}-female`};
    }
    else { return ""; }
  }

  const titleRender = (login, id) => {
    if (login != "") {
      const bytes_user_info = CryptoJS.AES.decrypt(ACCOUNTS[login], id);
      const user_info = JSON.parse(bytes_user_info.toString(CryptoJS.enc.Utf8));
      const stuff = user_info["gender"] == "female"
      ? "Мы очень сильно стараемся над тем, чтобы этот день прошел идеально, поэтому будем благодарны если в своих образах ты отдашь предпочтение легким летним или коктейльным платьям в заданных оттенках"
      : "Нам будет особенно приятно видеть тебя в нарядах цветовой гаммы нашей свадьбы"
      return stuff
    }
  }

  return (
    <section className="card dress-code-section middle-section" id="dress-code-section">
      <h1 className="title">Dress Code</h1>
      <p className="text">{titleRender(user, id)}</p>
      <div className="color-container">
        <div className={`${getTone(user, id, "first-color")} color-box`}></div>
        <div className={`${getTone(user, id, "second-color")} color-box`}></div>
        <div className={`${getTone(user, id, "third-color")} color-box`}></div>
        <div className={`${getTone(user, id, "fourth-color")} color-box`}></div>
      </div>
      <ImageGallery
      showFullscreenButton={false}
      showNav={false}
      showBullets={true}
      showPlayButton={false}
      showThumbnails={false}
      items={getImages(user, id)}
      />
    </section>
  );
};

export default DressCode;
