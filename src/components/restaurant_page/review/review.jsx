import React from 'react'
import './review.css'
import about_logo from '../../../img/about_logo.svg'
import burger from '../../../img/burger.svg'
import { reviews } from '@/database'

const Review = restId => {
	const review = reviews.find(rev => rev.restaurantId == restId.restId)

	return (
		<div className='medium-purple__review'>
			<div className='container'>
				<div className='main_rev'>
					<div className='main_review__text'>
						<div className='main_info-one-line'>
							<h1 className='title-h1 main_review__title'>{review.title}</h1>
							<h3 className='title-h3'>Дата: {review.date}</h3>
						</div>
						<p className='main__description'>{review.description}</p>
						<div className='main_review'>
							<img src={review.imgSrc} alt='' />
							<img src={review.imgSrc} alt='' />
							<img src={review.imgSrc} alt='' />
						</div>
						<div className='rest__mark'>
							<p>Оценка: {review.rating}/10</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review
