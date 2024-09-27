"use client";
import React, { useEffect, useState } from 'react';
import styles from './style.module.css'; // Import your CSS for styling

const CardSlider = () => {
  const cards = [
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news4.914287db.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news7.84827f18.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news5.e90cc007.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news10.8a1e8046.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news1.ffe2db3c.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news6.838c51a1.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news8.4a0579be.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news3.a38cffff.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news9.09d7eb66.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news2.2b3f34f7.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news4.914287db.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news7.84827f18.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news5.e90cc007.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news10.8a1e8046.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news1.ffe2db3c.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news6.838c51a1.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news8.4a0579be.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news3.a38cffff.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news9.09d7eb66.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/slide_news2.2b3f34f7.svg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(currentIndex===cards.length-1){
        setCurrentIndex(0)
    }
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [cards.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.card} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div className={styles.cardItem} key={index}>
            <img src={card.imgSrc} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
;

