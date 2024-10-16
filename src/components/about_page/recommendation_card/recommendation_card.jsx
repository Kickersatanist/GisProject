import React from 'react'
import './recommendation_card.css'
import { Link } from 'react-router-dom'

const RecommendationCard = ({
	title,
	description,
	imgSrc,
	id,
	totalRating,
}) => {
	const maxRating = 10

	return (
		<div className='card'>
			<img src={imgSrc} alt={title} />
			<h4>{title}</h4>
			<p>{description}</p>
			<p className='rec-card-total-rate'>
				{totalRating}/{maxRating}
			</p>
			<Link to={`/restaurant/${id}`}>
				<button className='button'>Посмотреть</button>
			</Link>
		</div>
	)
}

export default RecommendationCard
