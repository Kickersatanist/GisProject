import React, { useCallback, useEffect, useState } from 'react'
// import './main.css'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'
// import ikit from '../../img/ikit.svg'
import { Link } from 'react-router-dom'
import './main.css'
import * as API from '@/shared/api/places'
import { Skeleton } from '@mui/material'
import { mapTiler, marker_color } from '@/shared/api/map_cfg/ConfigMap'
import { maxRating } from '@/shared/data'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { StyledRating } from '@/shared/components/CustomRating/StyledRating'

const MapMain = () => {
	const [isActive, setActive] = useState(false)
	const [activeMarker, setActiveMarker] = useState<API.TypeVisitedPlace>()
	const [visitedPlaces, setVisitedPlaces] = useState<API.TypeVisitedPlace[]>()
	const [isLoading, setIsLoading] = useState(false)

	const toggleClass = (e: any) => {
		const foundPlace = visitedPlaces?.find(
			vp => vp.latitude === e.anchor[0] && vp.longitude === e.anchor[1]
		)
		setActiveMarker(foundPlace)
		if (foundPlace !== activeMarker) {
			return setActive(true)
		}
		setActive(!isActive)
	}

	useEffect(() => {
		setIsLoading(true)
		API.getAllVisitedPlaces()
			.then(response => {
				setVisitedPlaces(response.data)
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
							{isActive ? (
								<Overlay
									className={`markerOverlay ${isActive ? 'overlayActive' : ''}`}
									anchor={[activeMarker!.latitude, activeMarker!.longitude]}
									offset={[0, 0]}
								>
									<div className='overlayMain'>
										<div className='overlayContainer'>
											<h2 className='overlayTitle'>{activeMarker?.name}</h2>
											<p className='overlayDesc'>{activeMarker?.description}</p>
											<img className='overlayImg' alt='' />
											<p className='overlayMark'>
												<StyledRating
													name='restaurantRating'
													className='rest_rating'
													precision={0.5}
													value={activeMarker?.avgMark}
													readOnly
													max={maxRating}
													icon={<Favorite fontSize='inherit' />}
													emptyIcon={<FavoriteBorder fontSize='inherit' />}
												></StyledRating>
											</p>
											<Link
												to={`/restaurant/${activeMarker?.visitedPlaceId}`}
												className='overlayButton'
												state={{ place: activeMarker }}
											>
												Посмотреть
												{/* <button className='overlay_button'>Посмотреть</button> */}
											</Link>
										</div>
									</div>
								</Overlay>
							) : (
								''
							)}
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
