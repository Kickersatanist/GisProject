import React from 'react';
import './about_person.css';
import about_person from '../../../img/about_person.svg' 

const AboutPerson = () => {
  return (
    <div className="person_info">
      <img src={about_person} alt="" />
      <h3>Погодейкина Алина</h3>
      <p>дегустатор всего Красноярска</p>
    </div>
  );
}

export default AboutPerson;
