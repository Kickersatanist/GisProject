import React, { useCallback, useEffect, memo, useState } from 'react'
import './review.css'
import { reviews } from '@/database'
import * as API from '@/shared/api/posts'
import { Skeleton } from '@mui/material'

interface IProps {
	placeId: number
}

const Review = memo((props: IProps) => {
	// const review = reviews.find(rev => rev.restaurantId == restId.restId)
	const [reviews, setReviews] = useState<API.TypePost[]>()
	const { placeId } = props
	const [isLoading, setIsLoading] = useState(false)

	const getPosts = useCallback(() => {
		setIsLoading(true)
		API.getPostsByPlaceId(placeId)
			.then(response => {
				console.log(response)
				setReviews(response.data)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	useEffect(() => {
		API.getPostsByPlaceId(placeId).then(response => {
			setReviews(response.data)
		})
	}, [])

	return (
		<div className='medium-purple__review'>
			{!isLoading ? (
				reviews?.map(r => (
					<div className='container'>
						<div className='main_rev'>
							<div className='main_review__text'>
								<div className='main_info-one-line'>
									<h1 className='title-h1 main_review__title'>{r.name}</h1>
									<h3 className='title-h3'>
										Дата: {new Date(r.date).toLocaleDateString('ru-RU')}
									</h3>
								</div>
								<p className='main__description'>{r.description}</p>
								<div className='main_review'>
									{/* <img src={review.imgSrc} alt='' />
							<img src={review.imgSrc} alt='' />
							<img src={review.imgSrc} alt='' /> */}
								</div>
								<div className='rest__mark'>
									<p>Оценка: {r.mark}</p>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<div className='container'>
					<Skeleton variant={'rounded'} height={300}></Skeleton>
				</div>
			)}
		</div>
	)
})

export default Review
