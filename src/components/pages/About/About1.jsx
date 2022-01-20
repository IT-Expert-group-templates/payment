import React from 'react';
import s from './About1.module.scss';
import img from '../../../assets/img/slider4.jpg';
import { Link } from 'react-router-dom';

const About1 = () => {

  return (
    <div className={s.main} style={{ backgroundImage: `url(${img})` }}>
      <div className={s.container}>
        <div className={s.content}>
          <h3>
            Bizning to‘lov tizimimiz
          </h3>
          <p>
            Biz o‘z mijozlarimizga kontaktsiz texnologiyalar yordamida to‘lovlarni amalga oshirishning innovatsion
            usulini taklif qiladi. Buning uchun bizning barcha karta va terminallarimiz kontaktsiz to‘lov funksionali
            bilan ta’minlangan.
          </p>
          <Link to="/payment">
            Batafsil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About1;



