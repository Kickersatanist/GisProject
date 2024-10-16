import React from 'react'
import RecommendationCard from '../recommendation_card/recommendation_card'
import './recommendations.css'
import dessert from '../../../img/десерт.jpg'
import cake from '../../../img/чизкейк.webp'
import juice from '../../../img/сок.webp'
import burger from '../../../img/burger.svg'
import { restaurants } from '@/database.jsx'

const Recommendations = () => {
	const recommendations = restaurants

	return (
		<div className='recommendations'>
			<div className='container'>
				<div className='recommendations_container'>
					<h3 className='title-h3'>Рекомендации</h3>
					<div className='recommendation_cards'>
						{recommendations.map((rec, index) => (
							<RecommendationCard
								key={index}
								title={rec.title}
								description={rec.description}
								imgSrc={rec.imgSrc}
								id={rec.id}
								totalRating={rec.totalRating}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Recommendations
