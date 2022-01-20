import React, { useState } from 'react';
import s from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  console.log(i18n.language);

  return (
    <div className={s.main}>
      <div className={s.container}>
        <Link to="/" className={s.logo}>
          LOGO
        </Link>
        <div className={s.links}>
          <Link className={s.a} to="/transfer">transfer</Link>
          <Link className={s.a} to="/pay">pay</Link>
          <div className={s.number}>
            <p>Call number</p>
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
              Login
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
                <Link onClick={() => setOpen(false)} to="/about">about</Link>
                <Link onClick={() => setOpen(false)} to="/partners">partners</Link>
                <Link onClick={() => setOpen(false)} to="/services">services</Link>
                <Link onClick={() => setOpen(false)} to="/help">help</Link>
              </div>
              <div>
                <Link onClick={() => setOpen(false)} to="/company">company</Link>
                <Link onClick={() => setOpen(false)} to="/news">news</Link>
                <Link onClick={() => setOpen(false)} to="/security">security</Link>
                <Link onClick={() => setOpen(false)} to="/rates">rates</Link>
                <Link onClick={() => setOpen(false)} to="/public-offer">public offer</Link>
                <Link onClick={() => setOpen(false)} to="/capabilities-system">description and capabilities of
                  systems</Link>
                <Link onClick={() => setOpen(false)} to="/site-map">site map</Link>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;