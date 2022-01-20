import React from 'react';
import s from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import { BsPersonCircle } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { GiBackwardTime } from 'react-icons/gi';
import img from '../../../assets/img/footer1.png';
import img2 from '../../../assets/img/footer2.png';
import logoComp from '../../../assets/img/logoCompany.png';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t} = useTranslation();

  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.logo}>

            <Link to="/"><img src={logoComp} alt="it expert" /></Link>

            <p>
              {t('footer.p1')}
            </p>
          </div>
          <div className={s.block}>
            <h3>
              {t('footer.contact')}
            </h3>
            <div className={s.flex}>
              <div>
                <ImLocation2 />
              </div>
              <p>
                {t('footer.address')}
              </p>
            </div>
            <div className={s.flex}>
              <div><IoIosCall /></div>
              <a href="tel:+998935863877" target="_blank" rel="noreferrer">
                +998935863877
              </a>
            </div>
            <div className={s.flex}>
              <div><IoIosMail /></div>
              <a href="mailto:xjurayev99@gmail.com" target="_blank" rel="noreferrer">
                xjurayev99@gmail.com
              </a>
            </div>
          </div>
          <div className={s.block}>
            <img src={img} alt="PCI and DSS" />
            <div className={s.pci}>
              <Link to="/">Payment Card Industry</Link>
              <Link to="/">Data Security Standard</Link>
            </div>
          </div>
          <div className={s.block}>
            <img src={img2} alt="Card" />
          </div>
        </div>
        <div className={s.question}>
          <Link to="/">{t('footer.q1')}</Link>
          <Link to="/">{t('footer.q2')}</Link>
          <Link to="/">{t('footer.q3')}</Link>
        </div>
        <div className={s.footer}>
          <div className={s.count}>
            TAS-IX
          </div>
          <div className={s.info}>
            <div className={s.item}>
              <div className={s.icon}>
                <BsPersonCircle />
              </div>
              <div className={s.inItem}>
                <span>{t('footer.info1')}</span>
                <p>{t('footer.info2')}</p>
                <p>{t('footer.info3')}</p>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.icon}>
                <GiBackwardTime />
              </div>
              <div>
                <span>{t('footer.info4')}</span>
                <p>{t('footer.info5')}</p>
              </div>
            </div>
          </div>
          <div className={s.made}>
            <div>
              <p>{t('footer.dev')}<br /> IT EXPERT®</p>
            </div>
            <a href="/https://itexpert-learningcenter.business.site">
              <img src={logoComp} alt="it expert" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;