import React, { useCallback, useEffect, useState } from 'react'
// import './main.css'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'
// import ikit from '../../img/ikit.svg'
import { Link } from 'react-router-dom'
import './main.css'
import * as API from '@/shared/api/places'
import { Skeleton } from '@mui/material'
import { mapTiler, marker_color } from '@/shared/api/map_cfg/ConfigMap'

const MapMain = () => {
	const [isActive, setActive] = useState(false)
	const [visitedPlaces, setVisitedPlaces] = useState<API.TypeVisitedPlace[]>()
	const [isLoading, setIsLoading] = useState(false)

	const toggleClass = () => {
		setActive(!isActive)
	}

	useEffect(() => {
		setIsLoading(true)
		API.getAllVisitedPlaces()
			.then(response => {
				setVisitedPlaces(response.data)
				console.log([response.data[0].latitude, response.data[0].longitude])
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return (
		// <div className={clsx(styles.lightPurple)}>
		<div className='lightPurple'>
			<div className='container'>
				<div className='map_main'>
					<h1 className='title-h1'>Карта посещенных ресторанов</h1>
					{!isLoading ? (
						<Map
							provider={mapTiler}
							dprs={[1, 2]}
							height={700}
							defaultCenter={[56.009137, 92.872533]}
							defaultZoom={12.5}
						>
							<ZoomControl
								buttonStyle={{ background: marker_color, color: 'white' }}
							/>
							{visitedPlaces?.map(vp => (
								<Marker
									width={50}
									color={marker_color}
									anchor={[vp.latitude, vp.longitude]}
									hover={true}
									onClick={toggleClass}
								/>
							))}
							{visitedPlaces?.map(vp => (
								<Overlay
									className={`markerOverlay ${isActive ? 'overlayActive' : ''}`}
									anchor={[vp.latitude, vp.longitude]}
									offset={[0, 0]}
								>
									<div className='overlayMain'>
										<div className='overlayContainer'>
											<h2 className='overlayTitle'>{vp.name}</h2>
											<img className='overlayImg' alt='' />
											<p className='overlayMark'>Оценка: {vp.avgMark}/5</p>
											<Link
												to={`/restaurant/${vp.visitedPlaceId}`}
												className='overlayButton'
												state={{ place: vp }}
											>
												Посмотреть
												{/* <button className='overlay_button'>Посмотреть</button> */}
											</Link>
										</div>
									</div>
								</Overlay>
							))}
						</Map>
					) : (
						<Skeleton variant='rectangular' height={700}></Skeleton>
					)}
				</div>
			</div>
		</div>
	)
}

export default MapMain
