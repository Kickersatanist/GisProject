import React from 'react';
import AboutInfo from '../components/about_page/about_info/about_info'; 
import AboutPerson from '../components/about_page/about_person/about_person'; 
import Recommendations from '../components/about_page/recommendations/recommendations'; 

const About = () => {
  return (
    <div className="about-page">
      <AboutInfo />
      <AboutPerson />
      <Recommendations />
    </div>
  );
}

export default About;
