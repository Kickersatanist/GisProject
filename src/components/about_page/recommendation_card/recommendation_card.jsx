import React from 'react';
import './recommendation_card.css'; 

const RecommendationCard = ({ title, description, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <button className='button'>Посмотреть</button>
    </div>
  );
}

export default RecommendationCard;
