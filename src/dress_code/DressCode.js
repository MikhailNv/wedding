import '../index.css'
import './DressCode.css';
import ImageGallery from "react-image-gallery";
// import logo1 from './images/img1.jpg';
// import logo2 from './images/img2.jpg';
// import logo3 from './images/img3.jpg';
import React from "react";

const images = [
    {
    //   original: "https://i.pinimg.com/736x/d9/56/44/d95644e9e475320fa6dfcd95c463b542.jpg",
      original: "https://i.pinimg.com/736x/db/38/83/db38838e8f0350e84ba52204cbdb5a10.jpg",
    },
    {
    //   original: "https://i.pinimg.com/736x/20/8e/8e/208e8e810035aebf2a43c2eaa3629577.jpg",
      original: "https://i.pinimg.com/736x/59/42/e7/5942e7c61e4635ebd0fabbaff29ee066.jpg"
    },
    {
        original: "https://i.pinimg.com/736x/5d/56/a1/5d56a1ffcbb1c3eebff965c433b70c1f.jpg"
    },
    {
    //   original: "https://i.pinimg.com/736x/d1/37/51/d13751dc2d0adc62a2d4453f5350fa4b.jpg",
      original: "https://i.pinimg.com/736x/3c/5d/75/3c5d75749b0423e9a4fa95da9b8ced35.jpg"
    },
  ];
  

const DressCode = () => {
  return (
    <section className="card dress-code-section middle-section">
      <h1 className="title">Dress Code</h1>
      <p className="text">Нам будет особенно приятно видеть Вас в нарядах цветовой гаммы нашей свадьбы</p>
      <div className="color-container">
        <div className="first-color color-box"></div>
        <div className="second-color color-box"></div>
        <div className="third-color color-box"></div>
        <div className="fourth-color color-box"></div>
      </div>
      <ImageGallery showFullscreenButton={false} showNav={false} showBullets={true} showPlayButton={false} showThumbnails={false} items={images} />
    </section>
  );
};

export default DressCode;
