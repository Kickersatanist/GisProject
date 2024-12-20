import Review from '@/components/restaurant_page/review/review'
import AnimatedPage from '@/components/animated_page/animated_page'
import { useParams } from 'react-router-dom'
import { restaurants } from '@/database.jsx'
import { useLocation } from 'react-router-dom'
import * as API from '@/shared/api/places'
import { useEffect, useState } from 'react'

const Restaurant = () => {
	const restName = 'Перцы'
	const params = useParams()
	const restaurantId = Number(params.restaurantId)
	// const restaurant = restaurants.find(rest => rest.id == restaurantId)
	const maxRating = 5
	const visitedPlace = params.visitedPlace
	const location = useLocation()
	const [place, setPlace] = useState<API.TypeVisitedPlace>()

	useEffect(() => {
		setPlace(prev => ({
			avgMark: location.state.place.avgMark,
			cities: location.state.place.cities,
			description: location.state.place.description,
			latitude: location.state.place.latitude,
			longitude: location.state.place.longitude,
			name: location.state.place.name,
			posts: location.state.place.posts,
			visitedPlaceId: location.state.place.visitedPlaceId,
			visitedPlacePhotos: location.state.place.visitedPlacePhotos,
		}))
	}, [])

	console.log(location.state)
	return (
		<AnimatedPage>
			<head>
				<title>{restName}</title>
			</head>
			<div className='container'>
				<div className='main_info-one-line'>
					<h1 className='title-h1'>{place?.name}</h1>
					<h3 className='title-h1'>
						Общая оценка: {place?.avgMark}/{maxRating}
					</h3>
				</div>
			</div>
			<div className='about-page'>
				<Review placeId={restaurantId} />
			</div>
		</AnimatedPage>
	)
}

export default Restaurant
