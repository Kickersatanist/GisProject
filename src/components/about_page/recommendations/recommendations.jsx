import React from 'react';
import RecommendationCard from '../recommendation_card/recommendation_card';
import './recommendations.css';
import dessert from '../../../img/десерт.jpg'
import cake from '../../../img/чизкейк.webp'
import juice from '../../../img/сок.webp'

const Recommendations = () => {
    const recommendations = [
        {
            title: 'Торт “Чизкейк”',
            description: 'Чизкейк - блюдо европейской и американской кухни...',
            imgSrc: cake,
        },
        {
            title: 'Сок Апельсиновый',
            description: 'Это напиток, получаемый из мякоти апельсинов...',
            imgSrc: juice,
        },
        {
            title: 'Торт “Чизкейк”',
            description: 'Чизкейк - блюдо европейской и американской кухни...',
            imgSrc: dessert,
        },
        {
            title: 'Торт “Чизкейк”',
            description: 'Чизкейк - блюдо европейской и американской кухни...',
            imgSrc: dessert,
        },
    ];

    return (
        <div className="recommendations">
            <div className="recommendations_container">
                <h3>Рекомендации</h3>
                <div className="recommendation_cards">
                    {recommendations.map((rec, index) => (
                        <RecommendationCard
                            key={index}
                            title={rec.title}
                            description={rec.description}
                            imgSrc={rec.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recommendations;
