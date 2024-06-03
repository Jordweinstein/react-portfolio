import React, { useState } from 'react';
import './styles/Carousel.css';
import Img1 from './images/1.jpeg';
import Img2 from './images/2.jpeg';
import Img3 from './images/3.jpeg';
import Img4 from './images/4.jpeg';
import Img6 from './images/6.jpeg';
import Img5 from './images/5.jpeg';
import Img7 from './images/7.jpeg';
import Img8 from './images/8.jpeg';

export default function Carousel() {
    const images = [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7,
        Img8
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
    setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    };
    const prevSlide = () => {
    setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    };
    return (
    <div className="carousel">
        <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
        </button>
        <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
        />
        <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
        </button>
    </div>
    );
};
