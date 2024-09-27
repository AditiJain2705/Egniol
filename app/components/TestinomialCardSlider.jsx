"use client";
import React, { useEffect, useState } from 'react';
import styles from './style.module.css'; // Import your CSS for styling

const TestinomialCardSlider = () => {
  const cards = [
    { imgSrc: "https://www.egniol.co.in/_next/static/media/1.2acf0873.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/2.5d867412.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/5.d30bcb09.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/10.b6917846.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/9.31682d5c.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/12.87330e91.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/11.ccfcfa66.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/15.06d083a5.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/18.a317936b.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/1.2acf0873.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/2.5d867412.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/5.d30bcb09.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/10.b6917846.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/9.31682d5c.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/12.87330e91.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/11.ccfcfa66.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/15.06d083a5.svg" },
    { imgSrc: "https://www.egniol.co.in/_next/static/media/18.a317936b.svg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // if(currentIndex===cards.length-1){
    //     setCurrentIndex(0)
    // }
    // const interval = setInterval(() => {
    //   setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    // }, 3000); 

    // return () => clearInterval(interval); 
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

export default TestinomialCardSlider;
;

