import React, { useState } from 'react';
import s from './Contact.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdMail } from 'react-icons/md';
// import Rotate from 'react-reveal/Rotate';
// import Flip from 'react-reveal/Flip';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [site, setSite] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setSite('');
    setMessage('');
  };

  return (
    <div className={s.main}>
      <div className={s.inMain}>
        <div className={s.top}>

          <div className={s.inTop}>
            <div className={s.icon}><MdLocationOn /></div>
            <div className={s.infoTop}>
              <h3>
                Address
              </h3>
              <p>
                100001, Republic of Uzbekistan, Tashkent, st. Islam Karimov, 6
              </p>
            </div>
          </div>
          <div className={s.inTop}>
            <div className={s.icon}><FaPhoneAlt /></div>
            <div className={s.infoTop}>
              <h3>
                Phone number
              </h3>
              <a href="tel://+998935863877" rel="noreferrer" target="_blank">
                +998935863877
              </a>
            </div>
          </div>
          <div className={s.inTop}>
            <div className={s.icon}><MdMail /></div>
            <div className={s.infoTop}>
              <h3>
                Email
              </h3>
              <a href="mailto:xjurayev99@gmail.com" rel="noreferrer" target="_blank">
                xjurayev99@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={s.flex}>
          <div className={s.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d374.2444334983895!2d69.27258354052393!3d41.37505222883012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1620015378729!5m2!1sru!2sus"
              title="maps"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
            />
          </div>
          <div className={s.inputDiv}>
            <h2>
              GET IN TOUCH
            </h2>
            <form
              onSubmit={submit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <input
                type="text"
                placeholder="Website"
                name="site"
                value={site}
                onChange={(e) => setSite(e.target.value)} />
              <textarea
                name="message"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)} />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
