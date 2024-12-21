import React from 'react'
import './recommendation_card.css'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'
import { Favorite, FavoriteBorder, Style } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { maxRating } from '@/shared/data'

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff3d47',
	},
	// '& .MuiRating-iconHover': {
	// 	color: '#ff3d47',
	// },
})

const RecommendationCard = ({
	title,
	description,
	imgSrc,
	id,
	totalRating,
}) => {
	return (
		<div className='card'>
			<img src={imgSrc} alt={title} />
			<h4>{title}</h4>
			<p>{description}</p>
			<p className='rec-card-total-rate'>
				{totalRating}/{maxRating}
			</p>
			<StyledRating
				name='restaurantRating'
				className='rest_rating'
				precision={0.5}
				defaultValue={2.5}
				readOnly
				max={maxRating}
				icon={<Favorite fontSize='inherit' />}
				emptyIcon={<FavoriteBorder fontSize='inherit' />}
			></StyledRating>
			<Link to={`/restaurant/${id}`}>
				<button className='button'>Посмотреть</button>
			</Link>
		</div>
	)
}

export default RecommendationCard
