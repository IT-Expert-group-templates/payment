import React, { Fragment, useEffect, useState } from 'react';
import img1 from '../../../assets/img/slider2.jpg';
import img3 from '../../../assets/img/slider4.jpg';
import img2 from '../../../assets/img/slider5.jpg';
import style from './Carousel.module.scss';

function Carusel({ title }) {
  const [image, setImage] = useState(img1);
  useEffect(() => {
    const interval = setInterval(() => {
      switch (image) {
        case img1:
          setImage(img2);
          break;
        case img2:
          setImage(img3);
          break;
        case img3:
          setImage(img1);
          break;
        default:
          setImage(img1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Fragment>
      <div className={style.main}>
        <div
          className={style.Home1}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={style.bg}>

          </div>
          {/* <span></span> */}
          <h1>{title}</h1>

          {/* <h2 className={style.sections}>{name}</h2> */}
        </div>
      </div>
    </Fragment>
  );

}

export default Carusel;
