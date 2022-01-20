import React from 'react';
import s from './Payment.module.scss';
import { useTranslation } from 'react-i18next';
import { mobileOperator, netProvider, utilities } from '../../FakeApi/CategoryFake';


const Payment = () => {
  const { i18n } = useTranslation();

  const renderCategory = (obj) => {
    console.log(obj);
    return (
      <div className={s.category}>
        <div className={s.title}>
          <h3>
            {i18n.language === 'uz' && obj.nameUz}
            {i18n.language === 'ru' && obj.nameRu}
            {i18n.language === 'en' && obj.nameEn}
          </h3>
          <p>
            {obj.elements.length}
          </p>
          {
            obj.elements.length > 6 &&
            <div className={s.btn}>
              <p>more</p>
            </div>
          }
        </div>
        <div className={s.grid}>
          {
            obj.elements.map((card, index) => {
              console.log(card.img);
              return (
                <div className={s.card} key={index}>
                  <img src={card.img} alt={card.name} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  };


  return (
    <div className={s.main}>
      <div className={s.container}>
        {renderCategory(mobileOperator)}
        {renderCategory(netProvider)}
        {renderCategory(utilities)}
      </div>
    </div>
  );
};

export default Payment;