import React from 'react';
import './about_info.css';
import about_logo from '../../../img/about_logo.svg'

const AboutInfo = () => {
  return (
    <div className="about_info">
      <div className="about_content">
        <p>
          Наш сайт “Голодный студент” предназначен для людей, увлеченных вкусной и недорогой едой, 
          желающих делиться своими любимыми блюдами c другими. Главная цель - уменьшить финансовые 
          затраты и затраты по времени, чтобы студенты шли в ресторан, зная, какие блюда нужно брать 
          и за какую цену.
        </p>
        <div className="about_logo">
          <img src={about_logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
