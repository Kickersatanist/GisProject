import Review from '@/components/restaurant_page/review/review'
import AnimatedPage from '@/components/animated_page/animated_page'
import { useParams } from 'react-router-dom'
import { restaurants } from '@/database.jsx'

const Restaurant = () => {
	const restName = 'Перцы'
	const params = useParams()
	const restaurantId = params.restaurantId
	const restaurant = restaurants.find(rest => rest.id == restaurantId)
	const maxRating = 10

	return (
		<AnimatedPage>
			<head>
				<title>{restName}</title>
			</head>
			<div className='container'>
				<div className='main_info-one-line'>
					<h1 className='title-h1'>{restaurant.title}</h1>
					<h3 className='title-h1'>
						Общая оценка: {restaurant.totalRating}/{maxRating}
					</h3>
				</div>
			</div>
			<div className='about-page'>
				<Review restId={restaurantId} />
			</div>
		</AnimatedPage>
	)
}

export default Restaurant
