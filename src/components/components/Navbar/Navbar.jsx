import React, { useEffect, useState } from 'react';
import s from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../../assets/img/logoCompany.png';

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };


  useEffect(() => {
    const timer = setInterval(() => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={scroll ? `${s.mainScroll}` : `${s.main}`}>
      <div className={s.container}>
        <Link to="/" className={s.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={s.links}>
          <Link className={s.a} to="/transfer">{t('navbar.link1')}</Link>
          <Link className={s.a} to="/payment">{t('navbar.link2')}</Link>
          <div className={s.number}>
            <p>{t('navbar.cal')}</p>
            <a href="tel:+998935863877" target="_blank" rel="noreferrer">+998935863877</a>
          </div>
          <div className={s.btnLang}>
            <button
              onClick={() => changeLanguage('uz')}
              className={i18n.language === 'uz' ? s.activeBtn : s.btn}>UZ
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className={i18n.language === 'ru' ? s.activeBtn : s.btn}>RU
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={i18n.language === 'en' ? s.activeBtn : s.btn}>ENG
            </button>


            {/*{i18n.language}*/}
            {/*<div className={s.hiddenLang}>*/}
            {/*  */}
            {/*</div>*/}
          </div>
          <div className={s.btnLogin}>
            <button>
              {t('navbar.btn')}
            </button>
          </div>
          <div className={s.btnMenu}>
            {
              open ? <AiOutlineClose onClick={() => setOpen(false)} />
                : <AiOutlineMenu onClick={() => setOpen(true)} />
            }

            <div className={s.menuItems}
                 style={open ? { width: 'auto', height: 'auto' } : { width: '0', height: 0, display: 'none' }}>
              <div>
                <Link onClick={() => setOpen(false)} to="/about">{t('navbar.link3')}</Link>
                <Link onClick={() => setOpen(false)} to="/contact">{t('navbar.link4')}</Link>
                <Link onClick={() => setOpen(false)} to="/partners">{t('navbar.link5')}</Link>
                <Link onClick={() => setOpen(false)} to="/services">{t('navbar.link6')}</Link>
                <Link onClick={() => setOpen(false)} to="/help">{t('navbar.link7')}</Link>
              </div>
              <div>
                <Link onClick={() => setOpen(false)} to="/company">{t('navbar.link8')}</Link>
                <Link onClick={() => setOpen(false)} to="/news">{t('navbar.link9')}</Link>
                <Link onClick={() => setOpen(false)} to="/security">{t('navbar.link10')}</Link>
                <Link onClick={() => setOpen(false)} to="/rates">{t('navbar.link11')}</Link>
                <Link onClick={() => setOpen(false)} to="/public-offer">{t('navbar.link12')}</Link>
                <Link onClick={() => setOpen(false)} to="/capabilities-system">{t('navbar.link13')}</Link>
                <Link onClick={() => setOpen(false)} to="/site-map">{t('navbar.link14')}</Link>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;