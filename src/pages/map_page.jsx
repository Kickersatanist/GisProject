import React from 'react'
import MapMain from '../components/map_page/main'
import AnimatedPage from '@/components/animated_page/animated_page'

const Map = () => {
	return (
		<AnimatedPage>
			<head>
				<title>Карта ресторанов</title>
			</head>
			<div className='map-page'>
				<MapMain></MapMain>
			</div>
		</AnimatedPage>
	)
}

export default Map
