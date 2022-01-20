import React from 'react';
import s from './About2.module.scss';
import { ImCreditCard } from 'react-icons/im';
import { MdPin } from 'react-icons/md';
import { FaCcMastercard } from 'react-icons/fa';


const About2 = () => {


  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <h2>
            Tizimning afzalliklari
          </h2>
          <div className={s.flex}>
            <div className={s.card}>
              <div className={s.icon}>
                <ImCreditCard />
              </div>
              <div className={s.text}>
                <h3>
                  Dual interfeysli
                </h3>
                <p>
                  Dual interfeysli kartalar (kontaktli va kontaktsiz)
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.icon}>
                <ImCreditCard />
              </div>
              <div className={s.text}>
                <h3>
                  Boshqa turdagi kartalar
                </h3>
                <p>
                  Mijozlar uchun transportda qo'llash uchun , studentlarga mo‘ljallangan, oilaviy va boshqa turdagi
                  kartalar
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.icon}>
                <MdPin />
              </div>
              <div className={s.text}>
                <h3>
                  PIN kodsiz to‘lovlar
                </h3>
                <p>
                  PIN kodsiz kichik summada to‘lovlarni amalga oshirish imkoniyati
                </p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.icon}>
                <FaCcMastercard />
              </div>
              <div className={s.text}>
                <h3>
                  Tizimining moslashuvchanligi
                </h3>
                <p>
                  Karta mahsulotlarining (xizmatlarini) yaratish va boshqarish tizimining moslashuvchanligi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;


// const particlesInit = (main) => {
//   console.log(main);
//
//   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
// };
//
// const particlesLoaded = (container) => {
//   console.log(container);
// };
// <div className={s.particles}>
//   <Particles style={{ position: 'unset' }}
//              className={s.canvas}
//              id="tsparticles"
//              init={particlesInit}
//              loaded={particlesLoaded}
//              options={{
//                fpsLimit: 60,
//                interactivity: {
//                  events: {
//                    onClick: {
//                      enable: true,
//                      mode: 'push',
//                    },
//                    onHover: {
//                      enable: true,
//                      mode: 'repulse',
//                    },
//                    resize: true,
//                  },
//                  modes: {
//                    bubble: {
//                      distance: 400,
//                      duration: 2,
//                      opacity: 0.8,
//                      size: 40,
//                    },
//                    push: {
//                      quantity: 4,
//                    },
//                    repulse: {
//                      distance: 200,
//                      duration: 0.4,
//                    },
//                  },
//                },
//                particles: {
//                  color: {
//                    value: '#ffffff',
//                  },
//                  links: {
//                    color: '#ffffff',
//                    distance: 150,
//                    enable: true,
//                    opacity: 0.5,
//                    width: 1,
//                  },
//                  collisions: {
//                    enable: true,
//                  },
//                  move: {
//                    direction: 'none',
//                    enable: true,
//                    outMode: 'bounce',
//                    random: true,
//                    speed: 2,
//                    straight: false,
//                  },
//                  number: {
//                    density: {
//                      enable: true,
//                      area: 800,
//                    },
//                    value: 100,
//                  },
//                  opacity: {
//                    value: 0.5,
//                  },
//                  shape: {
//                    type: 'circle',
//                  },
//                  size: {
//                    random: true,
//                    value: 5,
//                  },
//                },
//                detectRetina: true,
//              }}
//   />
// </div>